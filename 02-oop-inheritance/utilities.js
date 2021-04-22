
class Logger {
    constructor(){}
    log(){
        this.play();
    }
}

const social = {
    share: function (friendName) {
        return `share ${friendName}`;
    },
    like: function (friendName) {
        return `${friendName} likes`;
    }
}

export {Logger, social}