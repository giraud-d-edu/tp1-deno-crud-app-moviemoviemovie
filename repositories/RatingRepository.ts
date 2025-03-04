import { RatingDBO } from "../dbos/rating.dbo.ts";
import { crypto } from "https://deno.land/std@0.203.0/crypto/mod.ts";

class RatingRepository {
  private ratings: RatingDBO[] = [
    new RatingDBO("1", "1", 9), // Rating for "Interstellar"
    new RatingDBO("2", "2", 8)  // Rating for "The Dark Knight"
  ];

  // ✅ Add this method to retrieve all ratings
  getAll(): RatingDBO[] {
    return this.ratings;
  }

  getByFilmId(filmId: string): RatingDBO[] {
    return this.ratings.filter(rating => rating.filmId === filmId);
  }

  add(filmId: string, score: number): RatingDBO {
    const newRating = new RatingDBO(crypto.randomUUID(), filmId, score);
    this.ratings.push(newRating);
    return newRating;
  }
}

// Export an instance of the repository
export const ratingRepository = new RatingRepository();
