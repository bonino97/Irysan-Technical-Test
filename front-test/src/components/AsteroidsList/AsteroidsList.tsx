import React, { useState } from 'react';
import useFetch from 'hooks/useFetch';
import { Asteroid } from 'types/Asteroid.interface';
import { API_URL, NASA_API_KEY } from 'utils/utils';
import AsteroidsTable from 'components/AsteroidsTable/AsteroidsTable';
import DateRangePicker from 'components/DateRangePicker/DateRangePicker';

import './AsteroidsList.css';
import { Link } from 'react-router-dom';

const AsteroidsList: React.FC = () => {
  const [startDate, setStartDate] = useState<string | null>('2021-01-01');
  const [endDate, setEndDate] = useState<string | null>('2021-01-07');

  const handleSearch = (startDate: string | null, endDate: string | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const { data, error, isLoading } = useFetch<{
    element_count: number;
    near_earth_objects: Record<string, Asteroid[]>;
  }>(
    `${API_URL}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error: {error.message}
        <Link to='/'>Back to List</Link>
      </p>
    );
  }

  if (!data) {
    return null;
  }

  const asteroids: Asteroid[] = Object.values(data.near_earth_objects).flatMap(
    (list) => list
  );

  return (
    <div className='asteroids-list'>
      <h3 className='list-title'>Asteroids ({data.element_count})</h3>
      <DateRangePicker onSearch={handleSearch} />
      <AsteroidsTable asteroids={asteroids} />
    </div>
  );
};

export default AsteroidsList;
