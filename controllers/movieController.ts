import { Router, Context } from '../deps.ts';
import { FilmService } from '../services/movie.service.ts';
import { MovieDTO } from '../dtos/Movie.dto.ts';

const router = new Router();

router.get('/movies', async (ctx: Context) => {
    ctx.response.body = await FilmService.getAllFilms();
});

router.get('/movies/:id', async (ctx: Context) => {
    const id = ctx.request.url.pathname.split('/')[2];

    const film = await FilmService.getFilmById(id);

    if (!film) {
        ctx.response.status = 404;
        ctx.response.body = { error: 'Film not found' };
        return;
    }

    ctx.response.body = film;
});

router.post('/movies', async (ctx: Context) => {
    const body = await ctx.request.body().value;
    const filmDto = new MovieDTO(body.title, body.releaseYear, body.actors);

    const newFilm = await FilmService.createFilm(filmDto);
    ctx.response.status = 201;
    ctx.response.body = newFilm;
});

export default router;
