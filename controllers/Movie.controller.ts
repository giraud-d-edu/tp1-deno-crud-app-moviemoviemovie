import { Router, Context } from "../deps.ts";
import { FilmService } from "../services/Movie.service.ts";

const router = new Router();

router.get("/movies", async (ctx: Context) => {
  ctx.response.body = await FilmService.getAllFilms();
});

router.get("/movies/:id", async (ctx: Context) => {
  const id = ctx.request.url.pathname.split("/").pop()!;
  const film = await FilmService.getFilmById(id);

  if (!film) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Film not found" };
    return;
  }

  ctx.response.body = film;
});

router.post("/movies", async (ctx: Context) => {
  const { title, releaseYear, actors } = await ctx.request.body().value;

  if (!title || !releaseYear || !actors) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Title, releaseYear, and actors are required" };
    return;
  }

  const newFilm = await FilmService.createFilm(title, releaseYear, actors);
  ctx.response.status = 201;
  ctx.response.body = newFilm;
});

export default router;
