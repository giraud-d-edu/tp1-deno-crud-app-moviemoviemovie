import { Application } from "./deps.ts";
import filmRouter from "./controllers/Movie.controller.ts";
import actorRouter from "./controllers/Actor.controller.ts";
import ratingRouter from "./controllers/Rating.controller.ts";

const app = new Application();

app.use(filmRouter.routes());
app.use(filmRouter.allowedMethods());

app.use(actorRouter.routes());
app.use(actorRouter.allowedMethods());

app.use(ratingRouter.routes());
app.use(ratingRouter.allowedMethods());

console.log("🚀 Serveur démarré sur http://localhost:8000");

await app.listen({ port: 8000 });
