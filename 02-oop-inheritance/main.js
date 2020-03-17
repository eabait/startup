class EventEmitter {
  constructor() {}

  on(eventName, callback) {}
  emit(eventName, callback) {}
  delete(eventName, callback) {}
}

class Movie {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() {
    console.log(this.title, "is currently playing");
  }

  pause() {
    console.log(this.title, "is currently paused");
  }

  resume() {
    
    console.log(this.title, " resumed");
  }
}

//Class instance and testing methods

let movie1 = new Movie("avenger", 2018, 149);
movie1.play();
movie1.pause();
movie1.resume();

let movie2 = new Movie("sonic", 2019, 135);
movie2.play();
movie2.pause();
movie2.resume();

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
