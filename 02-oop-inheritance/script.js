import EventEmitter from './emiter.js';
import {Logger,social} from './utilities.js';

class Movie extends EventEmitter {
    constructor(name,year,duration){
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.actors = [] ;
    }
    play() {
        this.on(this.name,function() {console.log("playing " + this.name)}) 
    }
    pause() {
        this.on(this.name,()=>  {console.log("paused " + this.name)}) 
    }
    resume() {
        this.on(this.name,()=>  {console.log("resume " + this.name)}) 
    };
    addCast(actor){
        if (Array.isArray(actor)) {
            for (let i = 0; i < actor.length; i++) {
                this.actors.push(actor[i])
                };
        }
        if (!Array.isArray(actor)) {
            this.actors.push(actor);
            
        }
       
    }
}

class Actor {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
}


Object.assign(Movie.prototype,social);

const starsWars = new Movie(" 'Star Wars' ",1996,"4:45hs");
const esteban = new Actor("Esteban Paez",23);
const actors = [ 
    new Actor("Pancho Gutierrez",50),
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
]
starsWars.addCast(actors);
starsWars.addCast(esteban);
console.log(starsWars);
let str = starsWars.share("ernesto");
console.log(str)
str = starsWars.like("paola");
console.log(str)