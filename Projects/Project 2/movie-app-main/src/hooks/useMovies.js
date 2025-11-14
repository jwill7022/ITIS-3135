import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

export function useMovies() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider');
  }
  return context;
}
