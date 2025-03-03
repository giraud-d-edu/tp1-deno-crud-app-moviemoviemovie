import { Rating } from '../models/Rating.ts';

export class RatingRepository {
    private readonly ratings: Map<string, Rating> = new Map();

    addRating(rating: Rating): void {
        this.ratings.set(rating.id, rating);
    }

    getRatingById(id: string): Rating | undefined {
        return this.ratings.get(id);
    }

    updateRating(rating: Rating): void {
        if (this.ratings.has(rating.id)) {
            this.ratings.set(rating.id, rating);
        }
    }

    deleteRating(id: string): void {
        this.ratings.delete(id);
    }

    getAllRatings(): Rating[] {
        return Array.from(this.ratings.values());
    }
}
