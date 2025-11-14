import { Route, Routes } from 'react-router';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './components/homepage/Homepage';
import MovieDetails from './components/movie-details/MovieDetails';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </MovieProvider>
  );
}

export default App;
