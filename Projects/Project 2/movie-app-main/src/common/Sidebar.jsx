import { CalendarIcon, HomeIcon, PlayIcon, SearchIcon, StarIcon, TrendingUp } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

function Sidebar() {
  const sidebarOptions = [
    {
      label: 'Home',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      label: 'Trending',
      icon: <TrendingUp />,
      path: '/trending',
    },
    {
      label: 'Top Rated',
      icon: <StarIcon />,
      path: '/top-rated',
    },
    {
      label: 'Upcoming',
      icon: <CalendarIcon />,
      path: '/upcoming',
    },
    {
      label: 'Now Playing',
      icon: <PlayIcon />,
      path: '/now-playing',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <p className="text-2xl font-bold text-center mb-10">Movie App</p>
      <div className="flex items-center gap-2 mb-4 bg-black rounded-md pr-2">
        <input type="text" className="w-full p-2 rounded-md" placeholder="Search" />
        <button>
          <SearchIcon />
        </button>
      </div>
      {sidebarOptions.map((option) => (
        <Link
          to={option.path}
          key={option.label}
          className="flex items-center gap-2 p-4 hover:bg-gray-800 rounded-md"
        >
          {option.icon} <span>{option.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
