export class ActorDBO {
  constructor(
    public id: string,
    public name: string,
    public birthYear: number,
    public films: string[] = [] // IDs des films dans lesquels l'acteur joue
  ) {}
}
