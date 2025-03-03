import { Movie } from "../models/Movie.ts";

class FilmRepository {
  private movies: Movie[] = [
    new Movie(crypto.randomUUID(), "Interstellar", 2014, ["Matthew McConaughey"], []),
    new Movie(crypto.randomUUID(), "The Dark Knight", 2008, ["Christian Bale"], [])
  ];

  // Récupérer tous les films
  getAll(): Movie[] {
    return this.movies;
  }

  // Récupérer un film par ID
  getById(id: string): Movie | undefined {
    return this.movies.find(film => film.id === id);
  }

  // Ajouter un film
  add(title: string, releaseYear: number, actors: string[]): Movie {
    const newFilm = new Movie(crypto.randomUUID(), title, releaseYear, actors, []);
    this.movies.push(newFilm);
    return newFilm;
  }
}

// Exporter une instance unique pour éviter les problèmes de données partagées
export const filmRepository = new FilmRepository();
