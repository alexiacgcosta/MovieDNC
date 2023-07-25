import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5bf9eea04742798b4d4a25afc49a1283";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export default class MovieService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieDetails(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }

  static searchMovies(movie) {
    return axios(withBaseUrl("search/movie") + `&query=${movie}`);
  }
}
