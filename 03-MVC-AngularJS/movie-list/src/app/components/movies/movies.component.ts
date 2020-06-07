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
  title: string;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.title = '';
  }

  getMovies(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.movies= movies);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    const movie: Movie = ({title} as Movie);
    this.movieService.addMovie(movie)
    .subscribe(movie => {
      this.movies.push(movie);
    });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
}
