import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie-response";
import { Result } from "../interfaces/moviedb-response";

/**
 * Mapper para convertir datos de películas de la API de The Movie Database al formato interno.
 */
export class MovieMapper {

  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static fronTheMovieDBToCompleteMovie = ( movie: MovieDBMovieResponse): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map(g => g.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompany: movie.production_companies.map((c) => c.name),
    }
  }
}
