const init = () => {
    const canvas = document.getElementById('animatedRect');
    const ctx = canvas.getContext('2d');
    const rect = new Rectangle();

    const anim = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rect.draw(ctx);
        rect.move(canvas.width, canvas.height);
        console.log(rect.x);
        console.log(rect.y);
    };

    window.setInterval(anim, 100);
};

class Rectangle{
    constructor(){
        this.x = 25;
        this.y = 25;
        this.vx = 10;
        this.vy = 10;
    }
    draw(ctx){
        ctx.lineWidth = 5;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 100, 50);
    }
    move(width, height){
        if(this.x + 100 > width || this.x < 0) {
            this.vx *= -1;
        }
        else if(this.y + 50 > height || this.y < 0){
            this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
}

window.addEventListener("load", init);