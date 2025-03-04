import { Rating } from "../models/Rating.ts";
import { ratingRepository } from "../repositories/RatingRepository.ts";
import { filmRepository } from "../repositories/MovieRepository.ts";

export class RatingService {
  static async getRatingsForFilm(filmId: string): Promise<Rating[]> {
    return ratingRepository.getAllByFilm(filmId);
  }

  static async addRating(filmId: string, user: string, score: number): Promise<Rating | null> {
    const film = filmRepository.getById(filmId);
    if (!film) return null;

    return ratingRepository.add(filmId, user, score);
  }
}
