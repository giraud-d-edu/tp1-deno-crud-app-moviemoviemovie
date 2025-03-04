import { MovieDBO } from "../dbos/Movie.dbo.ts";

class FilmRepository {
  private movies: MovieDBO[] = [
    new MovieDBO("1", "Interstellar", 2014, ["Matthew McConaughey"], []),
    new MovieDBO("2", "The Dark Knight", 2008, ["Christian Bale"], [])
  ];

  // Récupérer tous les films
  getAll(): MovieDBO[] {
    return this.movies;
  }

  // Récupérer un film par ID
  getById(id: string): MovieDBO | undefined {
    return this.movies.find(film => film.id === id);
  }

  // Ajouter un film
  add(title: string, releaseYear: number, actors: string[]): MovieDBO {
    const newFilm = new MovieDBO(crypto.randomUUID(), title, releaseYear, actors, []);
    this.movies.push(newFilm);
    return newFilm;
  }
}

// Exporter une instance unique pour éviter les problèmes de données partagées
export const filmRepository = new FilmRepository();
