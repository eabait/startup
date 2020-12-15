class Movie{
    constructor(title, year, duration){
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play(){
        return `Play "${this.title}"`;
    }
    pause(){
        return `Pause "${this.title}"`;
    }
    resume(){
        return `Resume "${this.title}"`;
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



// ---------- Test ----------

const rocky = new Movie('Rocky IV', 1985, '1h 30m');
const hacksawRidge = new Movie('Hacksaw Ridge', 2016, '1h 40m');
const menOfHonor = new Movie('Men of honor', 2000, '2h 10m');

const stallone = new Actor('Sylvester Stallone', 73);

console.log(`Tittle: ${menOfHonor.title}, Year: ${menOfHonor.year}, Duration: ${menOfHonor.duration}`);
console.log(`Name: ${stallone.name}, Age: ${stallone.age}`);

console.log(hacksawRidge.play());
console.log(hacksawRidge.pause());
console.log(hacksawRidge.resume());

/// ---------- Test eventEmitter ----------

const emitter = new EventEmitter();

emitter.on('firstEvent', () =>{
    console.log("I'm the callback 1 of firstEvent");
});

emitter.on('secondEvent', () =>{
    console.log("I'm the callback 1 of secondEvent");
});

const callback2 = () =>{
    console.log("I'm the callback 2 of secondEvent");
}

emitter.on('secondEvent', callback2);

emitter.emit('firstEvent');
emitter.emit('secondEvent');

emitter.off('secondEvent', callback2);

emitter.emit('secondEvent');