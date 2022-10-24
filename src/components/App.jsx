import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from  'Pages/Home';
import { Movies } from 'Pages/Movies';
import { Movie } from 'Pages/Movie';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home />} />
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
