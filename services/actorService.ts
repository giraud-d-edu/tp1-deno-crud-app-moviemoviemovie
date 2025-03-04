import { ActorDBO } from '../dbos/actorDbo.ts';
import { ActorDTO } from '../dtos/actorDto.ts';
import { actorRepository } from '../repositories/actorRepository.ts';

export class ActorService {
    static async getAllActors(): Promise<ActorDTO[]> {
        const actors: ActorDBO[] = await actorRepository.getAll();
        return actors.map((actor: ActorDBO) => new ActorDTO(actor.name, actor.birthYear));
    }

    static async getActorById(id: string): Promise<ActorDTO | null> {
        const actor: ActorDBO | null = await actorRepository.getById(id);
        return actor ? new ActorDTO(actor.name, actor.birthYear) : null;
    }

    static async createActor(actorDto: ActorDTO): Promise<ActorDTO> {
        const newActorDBO: ActorDBO = await actorRepository.add(actorDto.name, actorDto.birthYear);
        return new ActorDTO(newActorDBO.name, newActorDBO.birthYear);
    }
}
