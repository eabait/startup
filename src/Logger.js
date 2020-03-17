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