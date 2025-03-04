export class MovieDBO {
  constructor(
    public id: string,
    public title: string,
    public releaseYear: number,
    public actors: string[],
    public ratings: number[] = []
  ) {}
}
