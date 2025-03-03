import { Movie } from '../models/Movie.ts';

export class MovieRepository {
    private readonly movies: Map<string, Movie> = new Map();

    addMovie(movie: Movie): void {
        this.movies.set(movie.id, movie);
    }

    getMovieById(id: string): Movie | undefined {
        return this.movies.get(id);
    }

    updateMovie(movie: Movie): void {
        if (this.movies.has(movie.id)) {
            this.movies.set(movie.id, movie);
        }
    }

    deleteMovie(id: string): void {
        this.movies.delete(id);
    }

    getAllMovies(): Movie[] {
        return Array.from(this.movies.values());
    }
}
