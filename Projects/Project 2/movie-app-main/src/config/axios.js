import axios from 'axios';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

movieApi.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default movieApi;
