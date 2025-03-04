import { Rating } from "../models/Rating.ts";
import { ratingRepository } from "../repositories/RatingRepository.ts";
import { filmRepository } from "../repositories/MovieRepository.ts";

export class RatingService {
  static async getAllRatings(): Promise<Rating[]> {
    return ratingRepository.getAll();
  }

  static async getRatingsForFilm(filmId: string): Promise<Rating[]> {
    return ratingRepository.getByFilmId(filmId);
  }

  static async addRating(filmId: string, score: number): Promise<Rating | null> {
    // Vérifier si le film existe avant d'ajouter une note
    const film = filmRepository.getById(filmId);
    if (!film) return null;

    return ratingRepository.add(filmId, score);
  }
}
