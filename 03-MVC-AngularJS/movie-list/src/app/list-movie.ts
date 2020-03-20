import { Movie, Actor } from './interfaces/IMovie';

export const MOVIES: Movie[] = [
    {id: 1, tittle:'Terminator 3', year: 2003, duration: 120, 
    cast: [{name: 'Arnold Schwarzenegger', age: 72},{name: 'Nick Stahl', age: 40}]},
    {id: 2, tittle:'The A-Team', year: 2010, duration: 135, 
    cast: [{name: 'Liam Neeson', age: 67}, {name: 'Mr. T', age: 67}, {name: 'Dirk Benedict', age: 75}]},
    {id: 3, tittle:'X-Men Origins: Wolverine', year: 2009, duration: 115, 
    cast: [{name: 'Hugh Jackman', age: 51}]},
];