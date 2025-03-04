import { Router, Context } from "../deps.ts";
import { RatingService } from "../services/Rating,service.ts";

const router = new Router();

// Récupérer toutes les notes
router.get("/ratings", async (ctx: Context) => {
  ctx.response.body = await RatingService.getAllRatings();
});

// Récupérer les notes pour un film spécifique
router.get("/ratings/:id", async (ctx: Context) => {
  const filmId = ctx.request.url.searchParams.get("id")!;
  ctx.response.body = await RatingService.getRatingsForFilm(filmId);
});

// Ajouter une nouvelle note
router.post("/ratings", async (ctx: Context) => {
  const { filmId, user, score } = await ctx.request.body().value;

  if (!filmId || !user || score === undefined) {
    ctx.response.status = 400;
    ctx.response.body = { error: "filmId, user, and score are required" };
    return;
  }

  if (score < 0 || score > 10) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Score must be between 0 and 10" };
    return;
  }

  const newRating = await RatingService.addRating(filmId, user, score);

  if (!newRating) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Film not found" };
    return;
  }

  ctx.response.status = 201;
  ctx.response.body = newRating;
});

export default router;
