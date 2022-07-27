/* eslint-disable react/require-default-props */
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
import { dateFormat } from '../util/util';

interface Iprops {
start?: string;
end?: string;
setStart:React.Dispatch<SetStateAction<string>>
setEnd?:React.Dispatch<SetStateAction<string>>
isRange?: boolean;
customCss?:string;
}
interface IData{
  value:string,
onClick: () => void,
}
export default function CustomCalinder({
  start, end, isRange = false, setStart, setEnd, customCss,
}: Iprops) {
  const prvBtnClass = 'react-datepicker__navigation react-datepicker__navigation--previous';
  const prvSpanClass = 'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous';
  const nextBtnClass = 'react-datepicker__navigation react-datepicker__navigation--next';
  const nextSpanClass = 'react-datepicker__navigation-icon react-datepicker__navigation-icon--next';

  const [startDate, setStartDate] = useState(new Date(start || ''));
  const [endDate, setEndDate] = useState(end ? new Date(end) : new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (dates: [Date, Date]) => {
    const [selectStart, selectEnd] = dates;
    setStartDate(selectStart);
    setStart(dateFormat(selectStart));
    setEndDate(selectEnd);
    if (setEnd) { setEnd(dateFormat(selectEnd !== null ? selectEnd : new Date())); }
  };
  const defaultCss = 'flex flex-1 max-w-[282px] w-[282px] h-[60px] min-w-max my-2  border-[2px] rounded-lg border-[#DFE1E5] items-center pl-[16px] ';
  const css = customCss === undefined ? defaultCss : customCss;
  const ExampleCustomInput = forwardRef<HTMLInputElement, IData>((props, ref) => (
    <div
      className={`${css} ${isOpen && 'border-[#6457FA]'}`}
    >
      {isOpen ? (
        <GlobalIcon.ActCalendar
          size={
        window.innerWidth > 768
          ? 24 : 16
}
        />
      ) : (
        <GlobalIcon.Calendar
          size={
          window.innerWidth > 768
            ? 24 : 16
}
        />
      )}
      <input
        type="button"
        className={`ml-[8px] text-[14px] sm:text-[18px] text-black ${isOpen && 'text-[#6457FA]'}  cursor-pointer`}
        onClick={props.onClick}
        value={props.value}
        ref={ref}
      />
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
          withPortal={window.innerWidth < 1280}
          onCalendarClose={() => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            setIsOpen(false);
          }}
          onCalendarOpen={() => {
            document.body.style.cssText = `
              position: fixed; 
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
            setIsOpen(true);
          }}
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
          onCalendarClose={() => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            setIsOpen(false);
          }}
          onCalendarOpen={() => {
            document.body.style.cssText = `
              position: fixed; 
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
            setIsOpen(true);
          }}
          withPortal={window.innerWidth < 1280}
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
          onChange={(date: Date) => {
            setStart(dateFormat(date));
            setStartDate(date);
          }}
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
