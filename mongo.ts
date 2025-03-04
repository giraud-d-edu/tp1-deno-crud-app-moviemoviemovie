import { MongoClient } from 'npm:mongodb@6.1.0';

const uri =
    'mongodb+srv://sloopssunsets0q:admin@cluster0.taqog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);

await client.connect();

interface DinosaurSchema {
    name: string;
    skills: string[];
}

const db = client.db('animals');
const dinosaurs = db.collection<DinosaurSchema>('dinosaurs');

await dinosaurs.insertOne({
    name: 'deno',
    skills: ['dancing', 'hiding'],
});

const allDinosaurs = await dinosaurs.find({ name: 'deno' }).toArray();

console.log(allDinosaurs);
client.close();
