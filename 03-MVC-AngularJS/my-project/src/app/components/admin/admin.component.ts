import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminMovies = []
  movies = []

  constructor(private movieService: MovieServiceClient) { }

  handleMovieDelete(movie): void {
    const localStoragemovies = JSON.parse(localStorage.getItem("movies"));
    if (Array.isArray(localStoragemovies)) this.movies = localStoragemovies;
    this.movies = this.movies.filter(fmovie => fmovie.title !== movie.title)
    localStorage.setItem("movies", JSON.stringify(this.movies))
  }

  handleMakeAvailable(movie): void {
    const localStoragemovies = JSON.parse(localStorage.getItem("movies"));
    let jsonMovies = [];
    if (Array.isArray(localStoragemovies)) jsonMovies = localStoragemovies;
    if (jsonMovies.findIndex(fmovie => fmovie.title === movie.title) !== -1) {
      alert('ya se encuentra agregada')
    } else {
      jsonMovies.push(movie);
      localStorage.setItem("movies", JSON.stringify(jsonMovies))
    }

  }

  ngOnInit(): void {
    this.movieService.moviesApiSearch().then(res => {
      this.adminMovies = res.results
      localStorage.setItem("movies", JSON.stringify(res.results))
    })


  }

}
