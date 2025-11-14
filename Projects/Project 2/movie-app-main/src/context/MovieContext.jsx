import React, { createContext, useEffect, useState } from 'react';
import movieApi from '../config/axios';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    if (popularMovies.length > 0 && topRatedMovies.length > 0) {
      return;
    }
    setIsLoading(true);
    try {
      const [popularRes, topRatedRes] = await Promise.all([
        movieApi.get('/movie/popular'),
        movieApi.get('movie/top_rated'),
      ]);
      setPopularMovies(popularRes.data.results);
      setTopRatedMovies(topRatedRes.data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const value = {
    popularMovies,
    topRatedMovies,
    isLoading,
    refetchMovies: fetchMovies,
  };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

export { MovieContext };
