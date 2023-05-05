import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Asteroid } from 'types/Asteroid.interface';
import './AsteroidsTable.css';

interface Props {
  asteroids: Asteroid[];
}

const AsteroidsTable: React.FC<Props> = ({ asteroids }) => {
  const [ascending, setAscending] = useState(true);

  const sortedAsteroids = useMemo(() => {
    const clonedAsteroids = [...asteroids];
    return clonedAsteroids.sort((a, b) =>
      ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }, [ascending, asteroids]);

  const toggleSortOrder = () => {
    setAscending(!ascending);
  };

  return (
    <table className='asteroids-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>
            Name
            <button onClick={toggleSortOrder}>{ascending ? '↓' : '↑'}</button>
          </th>
          <th>Min estimated diameter (m)</th>
          <th>Max estimated diameter (m)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedAsteroids.map((asteroid) => (
          <tr key={asteroid.id}>
            <td>{asteroid.id}</td>
            <td>{asteroid.name}</td>
            <td>{asteroid.estimated_diameter.meters.estimated_diameter_min}</td>
            <td>{asteroid.estimated_diameter.meters.estimated_diameter_max}</td>
            <td>
              <Link to={`/asteroids/${asteroid.id}`}>See details</Link>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AsteroidsTable;
