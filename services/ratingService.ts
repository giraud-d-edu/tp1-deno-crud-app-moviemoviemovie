import { RatingDTO } from '../dtos/ratingDto.ts';
import { ratingRepository } from '../repositories/ratingRepository.ts';
import { movieRepository } from '../repositories/MovieRepository.ts';

export class RatingService {
    // ✅ Retrieve all ratings
    static async getAllRatings(): Promise<RatingDTO[]> {
        const ratings = await ratingRepository.getAll();
        return ratings.map((rating) => new RatingDTO(rating.filmId, rating.score));
    }

    // ✅ Retrieve ratings for a specific film
    static async getRatingsForFilm(movieId: string): Promise<RatingDTO[]> {
        const ratings = await ratingRepository.getByFilmId(movieId);
        return ratings.map((rating) => new RatingDTO(rating.filmId, rating.score));
    }

    // ✅ Add a new rating (Fix)
    static async addRating(ratingDto: RatingDTO): Promise<RatingDTO | null> {
        // ✅ Check if the movie exists before adding the rating
        const movie = await movieRepository.getById(ratingDto.filmId);
        if (!movie) return null;

        // ✅ Add rating
        const newRating = await ratingRepository.add(ratingDto.filmId, ratingDto.score);

        return new RatingDTO(newRating.filmId, newRating.score);
    }
}
