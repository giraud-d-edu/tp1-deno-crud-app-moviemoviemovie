import { Router, Context } from '../deps.ts';
import { RatingService } from '../services/ratingService.ts';
import { RatingDTO } from '../dtos/ratingDto.ts';

const router = new Router();

// ✅ This should now work because getAllRatings() is implemented
router.get('/ratings', async (ctx: Context) => {
    ctx.response.body = await RatingService.getAllRatings();
});

// Retrieve ratings for a specific film
router.get('/ratings/:id', async (ctx: Context) => {
    const filmId = (ctx as any).params.id;

    if (!filmId) {
        ctx.response.status = 400;
        ctx.response.body = { error: 'Film ID is required' };
        return;
    }

    ctx.response.body = await RatingService.getRatingsForFilm(filmId);
});

// Add a new rating
router.post('/ratings', async (ctx: Context) => {
    const { filmId, score } = await ctx.request.body().value;

    if (!filmId || score === undefined) {
        ctx.response.status = 400;
        ctx.response.body = { error: 'filmId and score are required' };
        return;
    }

    if (score < 0 || score > 10) {
        ctx.response.status = 400;
        ctx.response.body = { error: 'Score must be between 0 and 10' };
        return;
    }

    const ratingDto = new RatingDTO(filmId, score);
    const newRating = await RatingService.addRating(ratingDto);

    if (!newRating) {
        ctx.response.status = 404;
        ctx.response.body = { error: 'Film not found' };
        return;
    }

    ctx.response.status = 201;
    ctx.response.body = newRating;
});

export default router;
