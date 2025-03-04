import { Actor } from "../models/Actor.ts";
import { crypto } from "https://deno.land/std@0.203.0/crypto/mod.ts";

class ActorRepository {
  private actors: Actor[] = [
    new Actor("1", "Leonardo DiCaprio", 1974, []),
    new Actor("2", "Christian Bale", 1974, [])
  ];

  getAll(): Actor[] {
    return this.actors;
  }

  getById(id: string): Actor | undefined {
    return this.actors.find(actor => actor.id === id);
  }

  add(name: string, birthYear: number): Actor {
    const newActor = new Actor(crypto.randomUUID(), name, birthYear);
    this.actors.push(newActor);
    return newActor;
  }
}

export const actorRepository = new ActorRepository();
