import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Movie } from './interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const movies = [
      {id: 1, tittle:'Terminator 3', year: 2003, duration: 120, 
      cast: [{name: 'Arnold Schwarzenegger', age: 72},{name: 'Nick Stahl', age: 40}]},
      {id: 2, tittle:'The A-Team', year: 2010, duration: 135, 
      cast: [{name: 'Liam Neeson', age: 67}, {name: 'Mr. T', age: 67}, {name: 'Dirk Benedict', age: 75}]},
      {id: 3, tittle:'X-Men Origins: Wolverine', year: 2009, duration: 115, 
      cast: [{name: 'Hugh Jackman', age: 51}]},
    ];
    return {movies};
  }

  genId(movies: Movie[]): number {
    let id;
    if(movies.length > 0){
      id = Math.max(...movies.map(hero => hero.id)) + 1;
    } else{
      id = 1;
    }
    return id;
  }
}
