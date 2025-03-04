import { RatingDTO } from "../dtos/Rating.dto.ts";
import { ratingRepository } from "../repositories/RatingRepository.ts";
import { filmRepository } from "../repositories/MovieRepository.ts";

export class RatingService {
  // ✅ Retrieve all ratings
  static async getAllRatings(): Promise<RatingDTO[]> {
    return ratingRepository.getAll().map(rating => new RatingDTO(rating.filmId, rating.score));
  }

  // ✅ Retrieve ratings for a specific film
  static async getRatingsForFilm(filmId: string): Promise<RatingDTO[]> {
    return ratingRepository.getByFilmId(filmId).map(rating => new RatingDTO(rating.filmId, rating.score));
  }

  // ✅ Add a new rating (only `filmId` and `score`)
  static async addRating(ratingDto: RatingDTO): Promise<RatingDTO | null> {
    const film = filmRepository.getById(ratingDto.filmId);
    if (!film) return null;

    const newRating = ratingRepository.add(ratingDto.filmId, ratingDto.score);
    return new RatingDTO(newRating.filmId, newRating.score);
  }
}
