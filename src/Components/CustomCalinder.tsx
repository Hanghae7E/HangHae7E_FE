/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-console */
import {
  createElement,
  forwardRef, SetStateAction, useState,
} from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import GlobalIcon from './GlobalIcon';

interface Iprops {
start: string;
end: string;
setStart:React.Dispatch<SetStateAction<string>>
setEnd:React.Dispatch<SetStateAction<string>>
isRange: boolean;
}
interface IData{
value: string,
onClick: () => void,
}
export default function CustomCalinder({
  start, end, isRange = false, setStart, setEnd,
}: Iprops) {
  const prvBtnClass = 'react-datepicker__navigation react-datepicker__navigation--previous';
  const prvSpanClass = 'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous';
  const nextBtnClass = 'react-datepicker__navigation react-datepicker__navigation--next';
  const nextSpanClass = 'react-datepicker__navigation-icon react-datepicker__navigation-icon--next';

  const [startDate, setStartDate] = useState(new Date(start));
  const [endDate, setEndDate] = useState(new Date(end));
  const [isFocus, setIsFocus] = useState(false);

  const handleClick = (dates: any) => {
    const [selectStart, selectEnd] = dates;
    setStart(selectStart);
    setEnd(selectEnd);
    setStartDate(selectStart);
    setEndDate(selectEnd);
    if (selectEnd) {
      setIsFocus(false);
    }
  };

  const ExampleCustomInput = forwardRef<HTMLDivElement, IData>((props, ref) => (
    <div
      onClick={props.onClick}
      ref={ref}
      className={`flex px-2  
      flex-1 max-w-[281px]
      w-[281px] h-[60px]
      items-center min-w-max
      py-3 my-2 cursor-pointer
      font-semibold border-[4px]
      rounded-lg
      border-inputGray
      focus-within:border-developer`}
      onFocus={() => {
			  setIsFocus(true);
      }}
      onBlur={() => {
			  setIsFocus(false);
      }}
    >
      <GlobalIcon.Calendar color={`${isFocus ? '#6457FA' : 'black'}`} />
      <input type="button" className="text-[18px] text-black focus-within:text-developer" value={props.value} />
    </div>
  ));
  ExampleCustomInput.displayName = 'ExampleCustomInput';
  return (
    <div
      className="datePickerWrapper"
    >
      {isRange ? (
        <DatePicker
          id="calendar"
          className="bg-white"
          renderCustomHeader={({
            monthDate, customHeaderCount, decreaseMonth, increaseMonth,
          }) => (
            <div className="mb-3">
              <button
                type="button"
                className={prvBtnClass}
                onClick={decreaseMonth}
                style={customHeaderCount === 1 ? { visibility: 'hidden' } : {}}
              >
                <span className={prvSpanClass}>{'<'}</span>
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString('ko', { month: 'narrow', year: 'numeric' })}
              </span>
              <button
                type="button"
                className={nextBtnClass}
                onClick={increaseMonth}
                style={customHeaderCount === 0 ? { visibility: 'hidden' } : {}}
              >
                <span className={nextSpanClass}>{'>'}</span>
              </button>
            </div>
          )}
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={endDate}
          onChange={handleClick}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          customInput={createElement(ExampleCustomInput)}
          monthsShown={2}
          minDate={new Date()}
          showDisabledMonthNavigation
        />
      ) : (
        <DatePicker
          renderCustomHeader={({
            monthDate, decreaseMonth, increaseMonth,
          }) => (
            <div>
              <button type="button" className={prvBtnClass} onClick={decreaseMonth}>
                {'<'}
                <span className={prvSpanClass}>{'<'}</span>
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString('ko', { month: 'narrow', year: 'numeric' })}
              </span>
              <button type="button" className={nextBtnClass} onClick={increaseMonth}>
                {'>'}
                <span className={nextSpanClass}>{'>'}</span>
              </button>
            </div>
          )}
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          isClearable
          minDate={new Date()}
          showDisabledMonthNavigation
          disabledKeyboardNavigation
          customInput={createElement(ExampleCustomInput)}
          onKeyDown={(e) => { e.preventDefault(); }}
        />
      )}
    </div>
  );
}
