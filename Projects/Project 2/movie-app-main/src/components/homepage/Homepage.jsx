import React from 'react';
import MovieCard from '../../common/MovieCard';
import { useMovies } from '../../hooks/useMovies';

function Homepage() {
  const { popularMovies, topRatedMovies, isLoading } = useMovies();

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="px-8 py-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-2xl">Popular Movies</h2>
        <button className="text-sm text-gray-300">See All</button>
      </div>
      <div className="grid grid-cols-5 gap-8 mt-4">
        {popularMovies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-2xl">Top Rated Movies</h2>
        <button className="text-sm text-gray-300">See All</button>
      </div>
      <div className="grid grid-cols-5 gap-8 mt-4">
        {topRatedMovies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
