// services/film.service.ts
import { Movie } from "../models/Movie.ts";
import { v4 as uuid } from "https://deno.land/std@0.106.0/uuid/mod.ts";

const movies: Movie[] = [];

export class FilmService {
  static async getAllFilms(): Promise<Movie[]> {
    return movies;
  }

  static async getFilmById(id: string): Promise<Movie | undefined> {
    return movies.find(f => f.id === id);
  }

  static async createFilm(title: string, releaseYear: number, actors: string[]): Promise<Movie> {
    const newFilm = new Movie(uuid.generate(), title, releaseYear, actors, []);
    movies.push(newFilm);
    return newFilm;
  }
}
