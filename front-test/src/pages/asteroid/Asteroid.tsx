import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { Asteroid } from 'types/Asteroid.interface';
import { API_URL, NASA_API_KEY } from 'utils/utils';
import AsteroidDetails from 'components/AsteroidDetail/AsteroidDetail';
import './Asteroid.css';

const AsteroidPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useFetch<Asteroid | null>(
    `${API_URL}/neo/${id}?api_key=${NASA_API_KEY}`
  );

  if (isLoading) {
    return (
      <div className='asteroid-container'>
        <div className='loading'>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='asteroid-container'>
        <div className='error'>Error: {error.message}</div>
        <Link to='/'>Back to List</Link>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className='asteroid-container'>
      <AsteroidDetails asteroid={data} />
    </div>
  );
};

export default AsteroidPage;
