class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
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

  deleteSingle(eventName, callback) {
    return () => {
      this.events[eventName] = this.events[eventName].filter(eventCb => callback !== eventCb);
    };
  }

  delete(eventName, callback) {
    return () => {
      this.events[eventName] = this.events[eventName].filter(eventCb => callback === eventCb);
    };
  }

}
class Logger {
  constructor() {}

  log(info) {
    if (Array.isArray(info)) {
      for (let i = 0; i < info.length; i++) {
        console.log(info[i]);
      }
    } else {
      console.log("the " + info + " event has been triggered");
    }
  }

}
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
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

  addCast(param) {
    if (Array.isArray(param)) {
      for (let i = 0; i < param.length; i++) {
        this.cast.push(param[i]);
      }
    } else {
      this.cast.push(param);
    }
  }

  showCast() {
    for (let i = 0; i < this.cast.length; i++) {
      console.log(this.cast[i]);
    }
  }

}
