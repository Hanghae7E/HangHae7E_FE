import { getDate, getMonth, getYear } from 'date-fns';
import { useState, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import _ from 'lodash';
import { locale } from 'moment';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';

interface Iprops {
  start: string;
  end: string;
  isRange: boolean;
}

export default function CustomCalinder({ start, end, isRange = false }: Iprops) {
  const prvBtnClass = 'react-datepicker__navigation react-datepicker__navigation--previous';
  const prvSpanClass =
    'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous';
  const nextBtnClass = 'react-datepicker__navigation react-datepicker__navigation--next';
  const nextSpanClass = 'react-datepicker__navigation-icon react-datepicker__navigation-icon--next';

  const [startDate, setStartDate] = useState(new Date(start));
  const [endDate, setEndDate] = useState(new Date(end));

  const handleClick = (dates: any) => {
    const [selectStart, selectEnd] = dates;
    setStartDate(selectStart);
    setEndDate(selectEnd);
  };

  return (
    <div className="datePickerWrapper">
      {isRange ? (
        <DatePicker
          renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
            <div>
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
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={handleClick}
          startDate={startDate}
          endDate={endDate}
          isClearable
          selectsRange
          monthsShown={2}
          minDate={new Date()}
          showDisabledMonthNavigation
        />
      ) : (
        <DatePicker
          renderCustomHeader={({ date, monthDate, decreaseMonth, increaseMonth }) => (
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
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          isClearable
          minDate={new Date()}
          showDisabledMonthNavigation
        />
      )}
    </div>
  );
}
