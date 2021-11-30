
import { lazy, memo, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  const MovieList = lazy(() => import('./screen/movie'))
  const MovieDetail = lazy(() => import('./screen/movie-detail'))
  const Loading = () => <div>Loading</div>
  return (
    <div className='App md:px-52 lg:px-96'>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              exact
              path='/'
              name='Movie List'
              element={<MovieList />}
            />
            <Route
              exact
              path='/:id'
              name='Movie Detail'
              element={<MovieDetail />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default memo(App);
