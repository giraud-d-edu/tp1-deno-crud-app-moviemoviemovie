import { Movie } from "../models/Movie.ts";
import { filmRepository } from "../repositories/MovieRepository.ts";

export class FilmService {
  static async getAllFilms(): Promise<Movie[]> {
    return filmRepository.getAll();
  }

  static async getFilmById(id: string): Promise<Movie | undefined> {
    return filmRepository.getById(id);
  }

  static async createFilm(title: string, releaseYear: number, actors: string[]): Promise<Movie> {
    return filmRepository.add(title, releaseYear, actors);
  }
}
