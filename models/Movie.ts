// models/film.ts
export class Movie {
  constructor(
    public id: string,
    public title: string,
    public releaseYear: number,
    public actors: string[], // Liste des ID des acteurs
    public ratings: number[] // Notes des utilisateurs
  ) {}
}
