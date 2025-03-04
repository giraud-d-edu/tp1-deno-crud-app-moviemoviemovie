import { MongoClient } from 'npm:mongodb@6.1.0';

const uri =
    'mongodb+srv://sloopssunsets0q:admin@cluster0.taqog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export class MongoConnection {
    private static client: MongoClient;
    private static instance: MongoConnection;

    private constructor() {}

    public static async getInstance(): Promise<MongoConnection> {
        if (!MongoConnection.instance) {
            try {
                MongoConnection.instance = new MongoConnection();
                MongoConnection.client = new MongoClient(uri);
                await MongoConnection.client.connect();
                console.log('✅ Successfully connected to MongoDB.');
            } catch (error) {
                console.error('❌ Failed to connect to MongoDB:', error);
                throw error;
            }
        }
        return MongoConnection.instance;
    }

    public getDb(dbName: string) {
        return MongoConnection.client.db(dbName);
    }

    public async closeConnection() {
        if (MongoConnection.client) {
            await MongoConnection.client.close();
            console.log('Connection to MongoDB closed.');
        }
    }
}
