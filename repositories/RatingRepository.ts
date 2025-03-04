import { Rating } from "../models/Rating.ts";
import { crypto } from "https://deno.land/std@0.203.0/crypto/mod.ts";

class RatingRepository {
  private ratings: Rating[] = [];

  getAllByFilm(filmId: string): Rating[] {
    return this.ratings.filter(rating => rating.filmId === filmId);
  }

  add(filmId: string, user: string, score: number): Rating {
    const newRating = new Rating(crypto.randomUUID(), filmId, user, score);
    this.ratings.push(newRating);
    return newRating;
  }
}

export const ratingRepository = new RatingRepository();
