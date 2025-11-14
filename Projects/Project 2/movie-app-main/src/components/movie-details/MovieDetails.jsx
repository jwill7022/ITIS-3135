import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import movieApi from '../../config/axios';
import { formatDate } from '../../functions/formatDate';
import { PlayIcon, StarIcon } from 'lucide-react';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    movieApi.get(`/movie/${id}`).then((res) => {
      setMovie(res.data);
      console.log(res.data);
    });
  }, [id]);
  if (!movie) return <p>Loading...</p>;
  return (
    <div>
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#111] to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl font-semibold">{movie?.title}</h1>
          <p className="text-lg mt-2">{movie?.overview}</p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4" />
              <p>{movie?.vote_average.toFixed(1)}</p>
            </div>
            <p>{formatDate(movie?.release_date)}</p>
          </div>
        </div>
      </div>
      <div className="px-8 pb-10">
        <h2 className="text-2xl font-semibold mb-2">Genres</h2>
        <div className="flex items-center gap-2">
          {movie.genres.map((genre) => (
            <p className="text-xs bg-gray-800/50 px-4 py-2 rounded-full" key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
        <button
          className="flex flex-row items-center gap-2 bg-white rounded-full mt-8 text-black px-6 py-2"
          onClick={() => window.open(movie?.homepage, '_blank')}
        >
          <PlayIcon />
          <p>Go to website</p>
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
