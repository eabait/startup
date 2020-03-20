export interface Actor {
    name: string;
    age: number;
}

export interface Movie {
    id: number;
    tittle: string;
    year: number;
    duration: number;
    cast: Actor[];
  }

