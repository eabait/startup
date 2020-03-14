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

const social = {
    share(friendName){
        console.log(`${friendName} share ${this.title}`);
    },
    like(friendName){
        console.log(`${friendName} likes ${this.title}`);
    }
};

const ironman = new Movie('Iron Man 3', 2013, '2h 10m');

Object.assign(ironman, social);

ironman.share('Juan Perez');
ironman.like('Lucas Juarez');
