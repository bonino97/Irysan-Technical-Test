import { lazy, LazyExoticComponent } from 'react';

interface Route {
  to: string;
  path: string;
  name: string;
  Component: React.FC | LazyExoticComponent<React.FC>;
}

const AsteroidsPage = lazy(() => import('../pages/asteroids/Asteroids'));
const AsteroidDetailPage = lazy(() => import('../pages/asteroid/Asteroid'));

export const routes: Route[] = [
  {
    to: '/asteroids/',
    path: '/asteroids/*',
    name: 'Asteroids',
    Component: AsteroidsPage,
  },
  {
    to: '/asteroids/:id',
    path: '/asteroids/:id',
    name: 'AsteroidDetail',
    Component: AsteroidDetailPage,
  },
];
