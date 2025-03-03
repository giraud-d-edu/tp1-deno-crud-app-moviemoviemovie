// models/rating.ts
export class Rating {
  constructor(
    public id: string,
    public filmId: string,
    public user: string,
    public score: number
  ) {}
}
