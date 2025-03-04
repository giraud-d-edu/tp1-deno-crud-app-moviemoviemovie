import { Application } from './deps.ts';
import filmRouter from './controllers/movie.controller.ts';
import actorRouter from './controllers/actor.controller.ts';
import ratingRouter from './controllers/rating.controller.ts';
import { MongoConnection } from './mongo.ts';

const app = new Application();

await MongoConnection.getInstance();

app.use(filmRouter.routes());
app.use(filmRouter.allowedMethods());

app.use(actorRouter.routes());
app.use(actorRouter.allowedMethods());

app.use(ratingRouter.routes());
app.use(ratingRouter.allowedMethods());

console.log('🚀 Serveur démarré sur http://localhost:8000');

await app.listen({ port: 8000 });

await MongoConnection.getInstance();
