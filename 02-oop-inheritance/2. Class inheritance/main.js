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
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const rocky = new Movie('Rocky IV', 1985, '1h 30m');

rocky.on('play', () => {console.log('"Play" event was be emitted sucefully')});
rocky.on('pause', () => {console.log('"Pause" event was be emitted sucefully')});
rocky.on('resume', () => {console.log('"Resume" event was be emitted sucefully')});

rocky.play();
rocky.pause();
rocky.resume();
