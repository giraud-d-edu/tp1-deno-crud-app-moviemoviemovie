import { RatingDBO } from '../dbos/ratingDbo.ts';
import { MongoConnection } from '../mongo.ts';

export class RatingRepository {
    private collection: any;

    constructor() {
        this.initialize();
    }

    async initialize() {
        const db = await MongoConnection.getInstance().then((instance) => instance.getDb('movies_db'));
        this.collection = db.collection<RatingDBO>('ratings');
    }

    async getAll(): Promise<RatingDBO[]> {
        return await this.collection.find().toArray();
    }

    async getByFilmId(filmId: string): Promise<RatingDBO[]> {
        return await this.collection.find({ filmId }).toArray();
    }

    async add(filmId: string, score: number): Promise<RatingDBO> {
        const newRating: RatingDBO = { id: crypto.randomUUID(), filmId, score };
        await this.collection.insertOne(newRating);
        return newRating;
    }
}

export const ratingRepository = new RatingRepository();
