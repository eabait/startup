

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