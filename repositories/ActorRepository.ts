import { Actor } from '../models/Actor.ts';

export class ActorRepository {
    private actors: Map<string, Actor> = new Map();

    addActor(actor: Actor): void {
        this.actors.set(actor.id, actor);
    }

    getActorById(id: string): Actor | undefined {
        return this.actors.get(id);
    }

    updateActor(actor: Actor): void {
        if (this.actors.has(actor.id)) {
            this.actors.set(actor.id, actor);
        }
    }

    deleteActor(id: string): void {
        this.actors.delete(id);
    }

    getAllActors(): Actor[] {
        return Array.from(this.actors.values());
    }
}
