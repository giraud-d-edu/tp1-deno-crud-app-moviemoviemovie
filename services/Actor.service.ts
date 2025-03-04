import { Actor } from "../models/Actor.ts";
import { actorRepository } from "../repositories/ActorRepository.ts";

export class ActorService {
  static async getAllActors(): Promise<Actor[]> {
    return actorRepository.getAll();
  }

  static async getActorById(id: string): Promise<Actor | undefined> {
    return actorRepository.getById(id);
  }

  static async createActor(name: string, birthYear: number): Promise<Actor> {
    return actorRepository.add(name, birthYear);
  }
}
