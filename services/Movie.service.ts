import { MovieDBO } from "../dbos/Movie.dbo.ts";
import { MovieDTO } from "../dtos/Movie.dto.ts";
import { filmRepository } from "../repositories/MovieRepository.ts";

export class FilmService {
  static async getAllFilms(): Promise<MovieDTO[]> {
    return filmRepository.getAll().map(film => new MovieDTO(film.title, film.releaseYear, film.actors));
  }

  static async getFilmById(id: string): Promise<MovieDTO | undefined> {
    const film = filmRepository.getById(id);
    return film ? new MovieDTO(film.title, film.releaseYear, film.actors) : undefined;
  }

  static async createFilm(filmDto: MovieDTO): Promise<MovieDTO> {
    const newFilmDBO = filmRepository.add(filmDto.title, filmDto.releaseYear, filmDto.actors);
    return new MovieDTO(newFilmDBO.title, newFilmDBO.releaseYear, newFilmDBO.actors);
  }
}
