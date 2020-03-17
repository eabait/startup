class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  emit(eventName, ...rest) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(rest);
      });
    }
  }
//   deleteSingle(eventName, callback) {
//     return () =>{
//         this.events[eventName] = this.events[eventName].filter(eventCb => callback!== eventCb )
//     }
// in the function shown above you pass a one and remove that one  ,in the function below you pass one 
// and "filter out" the rest
//}

  delete(eventName, callback) {
      return () =>{
          this.events[eventName] = this.events[eventName].filter(eventCb => callback === eventCb )
      }
  }
}

class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() {
    this.emit("play");
  }

  pause() {
    this.emit("pause");
  }

  resume() {
    this.emit("resume");
  }
}

//Class instance and testing methods

let movie1 = new Movie("avengers", 2018, 149);

movie1.on("play", () => {
  console.log("play event trigered");
});
movie1.on("pause", () => {
  console.log("pause event trigered");
});
movie1.on("resume", () => {
  console.log("resume event trigered");
});

movie1.play()

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
