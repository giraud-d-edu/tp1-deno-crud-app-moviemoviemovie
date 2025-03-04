import { ActorDBO } from "../dbos/actor.dbo.ts";
import { crypto } from "https://deno.land/std@0.203.0/crypto/mod.ts";

class ActorRepository {
  private actors: ActorDBO[] = [
    new ActorDBO("1", "Leonardo DiCaprio", 1974, ["1"]),
    new ActorDBO("2", "Christian Bale", 1974, ["2"])
  ];

  getAll(): ActorDBO[] {
    return this.actors;
  }

  getById(id: string): ActorDBO | undefined {
    return this.actors.find(actor => actor.id === id);
  }

  add(name: string, birthYear: number): ActorDBO {
    const newActor = new ActorDBO(crypto.randomUUID(), name, birthYear);
    this.actors.push(newActor);
    return newActor;
  }
}

// Exporter une instance unique pour éviter les problèmes de données partagées
export const actorRepository = new ActorRepository();
