// models/actor.ts
export class Actor {
  constructor(
    public id: string,
    public name: string,
    public birthYear: number,
    public films: string[] // Liste des ID des films où il joue
  ) {}
}
