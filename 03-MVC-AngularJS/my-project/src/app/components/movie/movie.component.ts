import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  movies = []


  constructor(private movieService: MovieServiceClient, private router: Router) { }

  handleDetailsView(id): void {
    console.log("details");

    const url = "https://www.themoviedb.org/movie/" + id;
    window.location.href = url;
  }




  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('movies'));
    if (Array.isArray(data)) this.movies = data;
  }
}



