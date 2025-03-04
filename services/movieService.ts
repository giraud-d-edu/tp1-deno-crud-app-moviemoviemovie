import { MovieDBO } from '../dbos/movieDbo.ts';
import { MovieDTO } from '../dtos/movieDto.ts';
import { movieRepository } from '../repositories/movieRepository.ts';

export class FilmService {
    static async getAllFilms(): Promise<MovieDTO[]> {
        const films: MovieDBO[] = await movieRepository.getAll();
        return films.map((film: MovieDBO) => new MovieDTO(film.title, film.releaseYear, film.actors));
    }

    static async getFilmById(id: string): Promise<MovieDTO | undefined> {
        const film: MovieDBO | null = await movieRepository.getById(id);
        return film ? new MovieDTO(film.title, film.releaseYear, film.actors) : undefined;
    }

    static async createFilm(filmDto: MovieDTO): Promise<MovieDTO> {
        const newFilmDBO: MovieDBO = await movieRepository.add(filmDto.title, filmDto.releaseYear, filmDto.actors);
        return new MovieDTO(newFilmDBO.title, newFilmDBO.releaseYear, newFilmDBO.actors);
    }
}
