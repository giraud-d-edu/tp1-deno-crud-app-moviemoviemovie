import { MovieDBO } from "../dbos/Movie.dbo.ts";
import { MongoConnection } from "../mongo.ts";

export class MovieRepository {
    private collection: any;

    constructor() {
        this.initialize();
    }

    async initialize() {
        const db = await MongoConnection.getInstance().then(instance => instance.getDb("movies_db"));
        this.collection = db.collection<MovieDBO>("films");
    }

    async getAll(): Promise<MovieDBO[]> {
        return await this.collection.find({}).toArray();
    }

    async getById(movieId: string): Promise<MovieDBO | null> {
        return await this.collection.findOne({ id: movieId });
    }

    async add(title: string, releaseYear: number, actors: string[]): Promise<MovieDBO> {
        const newMovie: MovieDBO = { id: crypto.randomUUID(), title, releaseYear, actors, ratings: [] };
        await this.collection.insertOne(newMovie);
        return newMovie;
    }
}

export const movieRepository = new MovieRepository();
