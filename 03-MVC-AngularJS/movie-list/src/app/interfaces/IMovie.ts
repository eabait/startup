export interface Actor {
    name: string;
    age: number;
}

export interface Movie {
    id: number;
    title: string;
    year: number;
    duration: number;
    cast: Actor[];
  }

