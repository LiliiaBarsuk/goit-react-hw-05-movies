import {lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home= lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const Movie = lazy(() => import('../Pages/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<Movie />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
};
