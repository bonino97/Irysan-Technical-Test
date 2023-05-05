import React, { useState, useMemo } from 'react';
import moment from 'moment';

import './DateRangePicker.css';

interface DateRangePickerProps {
  onSearch: (startDate: string, endDate: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onSearch }) => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useMemo(() => {
    if (startDate && endDate) {
      const start = startDate.format('YYYY-MM-DD');
      const end = endDate.format('YYYY-MM-DD');
      return { start, end };
    }
    return null;
  }, [startDate, endDate]);

  const handleSearch = () => {
    if (startDate && endDate) {
      const start = startDate.format('YYYY-MM-DD');
      const end = endDate.format('YYYY-MM-DD');

      const diffInDays = endDate.diff(startDate, 'days');
      const maxDiffInDays = 7;

      const minDate = moment('1980-01-01');
      const maxDate = moment('2050-12-31');

      let errorMessage = '';

      if (startDate.isAfter(endDate)) {
        errorMessage = 'Start date cannot be after end date';
      } else if (diffInDays > maxDiffInDays) {
        errorMessage = 'Date range cannot be more than 7 days';
      } else if (startDate.isBefore(minDate)) {
        errorMessage = 'Start date cannot be before 1980';
      } else if (endDate.isAfter(maxDate)) {
        errorMessage = 'End date cannot be after 2050';
      }

      if (errorMessage) {
        return setErrorMessage(errorMessage);
      }

      return onSearch(start, end);
    }
  };

  return (
    <div className='date-range-picker'>
      <label>Start Date:</label>
      <input
        type='date'
        value={startDate ? startDate.format('YYYY-MM-DD') : ''}
        onChange={(e) => setStartDate(moment(e.target.value))}
      />
      <label>End Date:</label>
      <input
        type='date'
        value={endDate ? endDate.format('YYYY-MM-DD') : ''}
        onChange={(e) => setEndDate(moment(e.target.value))}
      />
      <button onClick={handleSearch}>Search</button>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
};

export default DateRangePicker;
