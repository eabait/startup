import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Movie } from './interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const movies = [
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
