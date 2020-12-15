import { Injectable } from '@angular/core';
import { Movie, Actor } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private moviesUrl = 'api/movies';

  constructor(
    private http: HttpClient,
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
        catchError(this.handleError<Movie[]>('getMovies', []))
    );
  } 

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url)
    .pipe(
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }
  
  private handleError<T> (operation, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    };
  }

  updateMovie (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions)
    .pipe(
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  deleteMovie (movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;
  
    return this.http.delete<Movie>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }
}
