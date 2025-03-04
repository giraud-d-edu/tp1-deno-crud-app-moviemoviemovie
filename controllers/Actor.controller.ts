import { Router, Context } from "../deps.ts";
import { ActorService } from "../services/Actor.service.ts";

const router = new Router();

router.get("/actors", async (ctx: Context) => {
  ctx.response.body = await ActorService.getAllActors();
});

router.get("/actors/:id", async (ctx: Context) => {
  const id = ctx.request.url.pathname.split("/").pop()!;
  const actor = await ActorService.getActorById(id);

  if (!actor) {
    ctx.response.status = 404;
    ctx.response.body = { error: "Actor not found" };
    return;
  }

  ctx.response.body = actor;
});

router.post("/actors", async (ctx: Context) => {
  const { name, birthYear } = await ctx.request.body().value;

  if (!name || !birthYear) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Name and birthYear are required" };
    return;
  }

  const newActor = await ActorService.createActor(name, birthYear);
  ctx.response.status = 201;
  ctx.response.body = newActor;
});

export default router;
