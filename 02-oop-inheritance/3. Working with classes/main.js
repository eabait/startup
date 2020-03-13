class EventEmitter{
    constructor(){
        this.events = {};
    }

    on(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
              
        this.events[eventName].push(callback);
    }

    emit(eventName){    
        if(this.events[eventName]){
            this.events[eventName].forEach(callback => {
                callback.call(eventName);
            });
        }
    }

    off(eventName, _callback){
        this.events[eventName] = this.events[eventName].filter(callback => callback !== _callback);
    }
}

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }
    play(){
        super.emit('play');
    }
    pause(){
        super.emit('pause');
    }
    resume(){
        super.emit('resume');
    }
    addCast(cast){
        if(Array.isArray(cast)){
            for(let i=0; i<cast.length; i++){
                if(cast[i] instanceof Actor){
                    this.cast.push(cast[i]);
                }
            }
        } else if(cast instanceof Actor){
            this.cast.push(cast);
        }
        
    }
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Logger{
    constructor(){

    }
    log(info){
        console.log(info);
    }
}

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
console.log(terminator.cast);

const logger = new Logger();

terminator.on("play", () => logger.log("The event 'play' has been emited"));
terminator.play(); 