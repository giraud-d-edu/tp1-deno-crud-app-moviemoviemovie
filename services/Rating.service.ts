import { RatingDTO } from "../dtos/Rating.dto.ts";
import { ratingRepository } from "../repositories/RatingRepository.ts";

export class RatingService {
  // ✅ Retrieve all ratings
  static async getAllRatings(): Promise<RatingDTO[]> {
    const ratings = await ratingRepository.getAll();
    return ratings.map(rating => new RatingDTO(rating.filmId, rating.score));
  }

  // ✅ Retrieve ratings for a specific film
  static async getRatingsForFilm(filmId: string): Promise<RatingDTO[]> {
    const ratings = await ratingRepository.getByFilmId(filmId);
    return ratings.map(rating => new RatingDTO(rating.filmId, rating.score));
  }

}
