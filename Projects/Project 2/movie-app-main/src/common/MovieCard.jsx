import { StarIcon } from 'lucide-react';
import React from 'react';
import { formatDate } from '../functions/formatDate';
import { useNavigate } from 'react-router';

function MovieCard({ title, poster_path, vote_average, release_date, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-md overflow-hidden cursor-pointer group"
      onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-auto group-hover:scale-125 transition-all duration-1000"
        />
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
          <p className="text-xl font-bold mb-1.5">{title}</p>
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4" />
              <p>{vote_average.toFixed(1)}</p>
            </div>
            <p className="text-sm">{formatDate(release_date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
