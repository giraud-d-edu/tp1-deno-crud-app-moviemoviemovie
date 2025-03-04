import { ActorDBO } from "../dbos/Actor.dbo.ts";
import { ActorDTO } from "../dtos/Actor.dto.ts";
import { actorRepository } from "../repositories/ActorRepository.ts";

export class ActorService {
  static async getAllActors(): Promise<ActorDTO[]> {
    return actorRepository.getAll().map(actor => new ActorDTO(actor.name, actor.birthYear));
  }

  static async getActorById(id: string): Promise<ActorDTO | undefined> {
    const actor = actorRepository.getById(id);
    return actor ? new ActorDTO(actor.name, actor.birthYear) : undefined;
  }

  static async createActor(actorDto: ActorDTO): Promise<ActorDTO> {
    const newActorDBO = actorRepository.add(actorDto.name, actorDto.birthYear);
    return new ActorDTO(newActorDBO.name, newActorDBO.birthYear);
  }
}
