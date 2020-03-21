import { Component, OnInit} from '@angular/core';

import { Movie } from '../../interfaces/IMovie';
import { MovieService } from '../../services/movie.service';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.router.navigate(['/movies']);
  }

  save(): void {
    this.movieService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }
}
