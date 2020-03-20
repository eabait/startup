import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/IMovie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies= movies);
  }

  add(tittle: string): void {
    tittle = tittle.trim();
    if (!tittle) { return; }
    this.movieService.addMovie({ tittle } as Movie)
      .subscribe(hero => {
        this.movies.push(hero);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
}
