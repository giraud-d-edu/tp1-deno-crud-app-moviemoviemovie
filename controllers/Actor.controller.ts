import { Router, Context } from "../deps.ts";
import { ActorService } from "../services/Actor.service.ts";
import { ActorDTO } from "../dtos/Actor.dto.ts";

const router = new Router();

router.get("/actors", async (ctx: Context) => {
  ctx.response.body = await ActorService.getAllActors();
});

router.get("/actors/:id", async (ctx: Context) => {
  const id = ctx.request.url.pathname.split("/")[2];
  const actor = await ActorService.getActorById(id);

  if (!actor) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Actor not found" };
    return;
  }

  ctx.response.body = actor;
});

router.post("/actors", async (ctx: Context) => {
  const body = await ctx.request.body().value;
  const actorDto = new ActorDTO(body.name, body.birthYear);

  const newActor = await ActorService.createActor(actorDto);
  ctx.response.status = 201;
  ctx.response.body = newActor;
});

export default router;
