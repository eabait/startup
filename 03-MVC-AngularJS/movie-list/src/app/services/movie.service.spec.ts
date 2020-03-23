import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie, Actor } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }); 
    movieService = TestBed.inject(MovieService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should list of movies', () => {
    const mockList : Movie[] = [
      {
        id: 1, 
        title:'Terminator 3', 
        year: 2003, 
        duration: 120, 
        cast: [
          {name: 'Arnold Schwarzenegger', age: 72},
          {name: 'Nick Stahl', age: 40}
        ]
      },
      {
        id: 2, 
        title:'The A-Team', 
        year: 2010, 
        duration: 135, 
        cast: [
          {name: 'Liam Neeson', age: 67}, 
          {name: 'Mr. T', age: 67}, 
          {name: 'Dirk Benedict', age: 75}
        ]
      },
      {
        id: 3, 
        title:'X-Men Origins: Wolverine', 
        year: 2009, 
        duration: 115, 
        cast: [
          {name: 'Hugh Jackman', age: 51}
        ]
      },
      {
        id: 4,
        title: 'Gladiator',
        year: 2000,
        duration: 180,
        cast:[
          {name: 'Russell Crowe', age: 55}
        ]
      },
      {
        id: 5,
        title: 'Fight Club',
        year: 1999,
        duration: 150,
        cast:[
          {name: 'Brad Pitt', age: 56},
          {name: 'Edward Norton', age: 50},
        ]
      },
      {
        id: 6,
        title: 'Platoon',
        year: 1986,
        duration: 120,
        cast:[
          {name: 'Willem Dafoe', age: 64}
        ]
      },
      {
        id: 7,
        title: 'Back to the Future',
        year: 1985,
        duration: 115,
        cast:[
          {name: 'Michael J. Fox', age: 58}
        ]
      },
    ];

    movieService.getMovies().subscribe( data => {
      expect(data.length).toBe(7);
      expect(data).toEqual(mockList);
    })

    const req = httpMock.expectOne('api/movies');
    expect(req.request.method).toEqual('GET');

    req.flush(mockList);
  });
  

  it('Should return a movie', () => {
    const mockResponse: Movie = {
      id: 6,
      title: 'Platoon',
      year: 1986,
      duration: 120,
      cast:[
        {name: 'Willem Dafoe', age: 64}
      ]
    };

    let response;
    spyOn(movieService, 'getMovie').and.returnValue(of(mockResponse));
    
    movieService.getMovie(6).subscribe(res => response = res);
    expect(response).toEqual(mockResponse);
  });

});