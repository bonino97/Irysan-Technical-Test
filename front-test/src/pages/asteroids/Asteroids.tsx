import React from 'react';
import AsteroidsList from 'components/AsteroidsList/AsteroidsList';

import './Asteroids.css';

const AsteroidsPage: React.FC = () => {
  return (
    <div className='asteroids-container'>
      <h1 className='asteroids-title'>Asteroids</h1>

      <AsteroidsList />
    </div>
  );
};

export default AsteroidsPage;
