import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';

const App = () => {
  return (
    <Suspense fallback={<h1>Loading ... </h1>}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path='/*' element={<Navigate to='/asteroids' replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
