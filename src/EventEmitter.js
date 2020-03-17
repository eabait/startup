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
        this.events[eventName] = this.events[eventName].filter(
          eventCb => callback !== eventCb
        );
      };
    }
  
    delete(eventName, callback) {
      return () => {
        this.events[eventName] = this.events[eventName].filter(
          eventCb => callback === eventCb
        );
      };
    }
  }