import { ActorDBO } from '../dbos/actor.dbo.ts';
import { MongoConnection } from '../mongo.ts';

export class ActorRepository {
    private collection: any;

    constructor() {
        this.initialize();
    }

    async initialize() {
        const db = await MongoConnection.getInstance().then((instance) => instance.getDb('movies_db'));
        this.collection = db.collection<ActorDBO>('actors');
    }

    async getAll(): Promise<ActorDBO[]> {
        if (!this.collection) {
            throw new Error('MongoDB connection not initialized');
        }
        return await this.collection.find({}).toArray();
    }

    async getById(id: string): Promise<ActorDBO | null> {
        if (!this.collection) {
            throw new Error('MongoDB connection not initialized');
        }
        return await this.collection.findOne({ id });
    }

    async add(name: string, birthYear: number): Promise<ActorDBO> {
        if (!this.collection) {
            throw new Error('MongoDB connection not initialized');
        }
        const newActor: ActorDBO = { id: crypto.randomUUID(), name, birthYear, films: [] };
        await this.collection.insertOne(newActor);
        return newActor;
    }
}

export const actorRepository = new ActorRepository();
