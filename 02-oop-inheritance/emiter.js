
class EventEmitter {
    constructor(){
        this.events = {};
    };
    on (eventName, callback){
        if(!this.events[eventName]) {
            this.events[eventName] = [];
          }
        const event = this.events[eventName];
        event.push(callback);
        return this.event;
    };
    emit (eventName){
        const event = this.events[eventName];
        event.forEach(calls => {
            calls.call();
        });
    };
    off (eventName, callback){
        const event = this.events[eventName];
        event = () => {};
    };
}
export default EventEmitter