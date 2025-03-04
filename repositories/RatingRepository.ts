import { Rating } from "../models/Rating.ts";
import { crypto } from "https://deno.land/std@0.203.0/crypto/mod.ts";

class RatingRepository {
  private ratings: Rating[] = [
    new Rating("1", "1", 9), // Note pour "Interstellar"
    new Rating("2", "2", 8)  // Note pour "The Dark Knight"
  ];

  // Récupérer toutes les notes
  getAll(): Rating[] {
    return this.ratings;
  }

  // Récupérer toutes les notes pour un film donné
  getByFilmId(filmId: string): Rating[] {
    return this.ratings.filter(rating => rating.filmId === filmId);
  }

  // Ajouter une note
  add(filmId: string, user: string, score: number): Rating {
    const newRating = new Rating(crypto.randomUUID(), filmId, score);
    this.ratings.push(newRating);
    return newRating;
  }
}

// Exporter une instance unique pour éviter les problèmes de données partagées
export const ratingRepository = new RatingRepository();
