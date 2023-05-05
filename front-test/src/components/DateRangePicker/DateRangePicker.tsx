import React, { useState, useMemo } from 'react';
import moment from 'moment';

import './DateRangePicker.css';

interface DateRangePickerProps {
  onSearch: (startDate: string, endDate: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onSearch }) => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

  const dateRange = useMemo(() => {
    if (startDate && endDate) {
      const start = startDate.format('YYYY-MM-DD');
      const end = endDate.format('YYYY-MM-DD');
      return { start, end };
    }
    return null;
  }, [startDate, endDate]);

  const handleSearch = () => {
    if (dateRange) {
      onSearch(dateRange.start, dateRange.end);
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
    </div>
  );
};

export default DateRangePicker;
