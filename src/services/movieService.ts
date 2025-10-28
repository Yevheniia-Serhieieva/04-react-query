import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesHttpResponse> => {
  const myKey = import.meta.env.VITE_TMDB_TOKEN;

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie`,
    params: {
      query,
      page,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myKey}`,
    },
  };

  const response = await axios.get<MoviesHttpResponse>(options.url, options);

  return response.data;
};
