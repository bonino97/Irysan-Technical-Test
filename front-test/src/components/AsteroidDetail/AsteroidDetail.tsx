import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Asteroid } from 'types/Asteroid.interface';

import './AsteroidDetail.css';

interface Props {
  asteroid: Asteroid;
}

const AsteroidDetails: React.FC<Props> = ({ asteroid }) => {
  const formattedDate = moment(
    asteroid.close_approach_data[0].close_approach_date
  ).format('LL');

  return (
    <div className='asteroid-details'>
      <h2>{asteroid.name}</h2>
      <p>
        <strong>Id:</strong> {asteroid.id}
      </p>
      <p>
        <strong>Nasa JPL URL:</strong>{' '}
        <a href={asteroid.nasa_jpl_url} target='_blank' rel='noreferrer'>
          {asteroid.nasa_jpl_url}
        </a>
      </p>
      <p>
        <strong>Is Potentially Hazardous:</strong>{' '}
        {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Estimated Diameter:</strong>{' '}
        {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} -{' '}
        {asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}{' '}
        meters
      </p>
      <p>
        <strong>Close Approach Date:</strong> {formattedDate}
      </p>
      <p>
        <strong>Miss Distance:</strong>{' '}
        {asteroid.close_approach_data[0].miss_distance.kilometers} kilometers
      </p>
      <p>
        <strong>Relative Velocity:</strong>{' '}
        {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour}{' '}
        km/hour
      </p>
      <Link to='/'>Back to List</Link>
    </div>
  );
};

export default AsteroidDetails;
