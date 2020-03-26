import { Component, OnInit} from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  movies = []


  constructor(private movieService: MovieServiceClient) { }



  ngOnInit() {
    this.movieService.moviesApiSearch().then(res => {
      this.movies = res.results
      localStorage.setItem("movies", JSON.stringify(res.results))
    })

  }
}



