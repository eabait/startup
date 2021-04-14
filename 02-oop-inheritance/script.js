
class EventEmitter {
    constructor(){
        this.events = {};
    };

    on (eventName, callback){
        if(!this.events[eventName]) {
            this.events[eventName] = [];
          }
        const event = this.events[eventName];
        event.push(callback);
        return this.event;
    };
    emit (eventName){
        const event = this.events[eventName];
        event.forEach(calls => {
            calls.call();
        });
    };
    off (eventName, callback){
        const event = this.events[eventName];
        event = () => {};
    };
}
/*
events = {
    eventName:[callback,....],
    eventName:[callback,....]...
}
*/





class Movie extends EventEmitter {
    constructor(name,year,duration){
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.actors = [];
        
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
    addCast(...args){
        
            for (let i = 1; i < args.length; i++) {
                
             
            this.actors.push(args[i-1])
        };
        

    }

}



class Actor{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
}


const actore = new Actor("pancho",50)

const starsWars = new Movie(" 'Star Wars' ",1996,"4:45hs")

console.log("Year: " + starsWars.year);
console.log("Duration: " + starsWars.duration);
console.log(starsWars);
console.log(actore);


// function saludar(texto = "Hola") {
//     console.log(texto);
// }

