// middlewares/logger.ts
import { Context } from "../deps.ts";
import { log } from "../deps.ts";

export async function logger(ctx: Context, next: Function) {
  log.info(`📢 ${ctx.request.method} ${ctx.request.url}`);
  await next();
}
