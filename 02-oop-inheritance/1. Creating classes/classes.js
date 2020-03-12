class Movie{
    constructor(title, year, duration){
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play(){

    }
    pause(){

    }
    resume(){

    }
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

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

/*const rocky = new Movie('Rocky IV', 1985, '1h 30m');
const hacksawRidge = new Movie('Hacksaw Ridge', 2016, '1h 40m');
const menOfHonor = new Movie('Men of honor', 2000, '2h 10m');

console.log(menOfHonor.duration);*/