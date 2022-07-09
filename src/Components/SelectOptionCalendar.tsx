import { getDate, getMonth, getYear } from 'date-fns';
import { useState, Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import _ from 'lodash';
import { locale } from 'moment';
import { ko } from 'date-fns/locale';

interface Iprops {
  start: string;
  end: string;
  isRange: boolean;
}

export default function Calendar({ start, end, isRange = false }: Iprops) {
  const [startDate, setStartDate] = useState(new Date(start));
  const [endDate, setEndDate] = useState(new Date(end));
  const years = _.range(2022, getYear(new Date()) + 2, 1);
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const handleClick = (dates: any) => {
    const [selectStart, selectEnd] = dates;
    setStartDate(selectStart);
    setEndDate(selectEnd);
  };
  return (
    <div className="custom-react-datePicker_wrapper">
      {isRange && (
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div>
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {'<'}
              </button>
              {/* 연도 선택 select box */}
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {years.map((option: any) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* 월 선택 select box */}
              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
              >
                {months.map((option: any) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {'>'}
              </button>
            </div>
          )}
          locale={ko}
          dateFormat="yyyy/MM/dd"
          onChange={handleClick}
          startDate={startDate}
          endDate={endDate}
          isClearable
          selectsRange
        />
      )}
      {
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div>
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {'<'}
              </button>
              {/* 연도 선택 select box */}
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {years.map((option: any) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* 월 선택 select box */}
              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
              >
                {months.map((option: any) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {'>'}
              </button>
            </div>
          )}
          locale={ko}
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          isClearable
        />
      }
    </div>
  );
}
