const draw = () => {
    const canvas = document.getElementById('geometricFigures');
    const ctx = canvas.getContext('2d');

    drawRect(ctx);
    drawTriangle(ctx);
    drawCircle(ctx);
    drawText(ctx);
};

const drawRect = (ctx) => {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.fillRect(25, 25, 100, 100);
    ctx.strokeRect(150, 25, 100, 100);
    ctx.stroke();
};

const drawTriangle = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(25, 150);
    ctx.lineTo(25, 250);
    ctx.lineTo(125, 150);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.moveTo(130, 250);
    ctx.lineTo(130, 150);
    ctx.lineTo(30, 250);
    ctx.closePath();
    ctx.stroke();
};

const drawCircle = (ctx) => {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "brown";
    ctx.arc(200, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();
};

const drawText = (ctx) => {
    ctx.font = '48px serif';
    ctx.strokeStyle ="violet"
    ctx.lineWidth = 2;
    ctx.strokeText('Hello world', 10, 300);
    ctx.fillText('Hello world', 10, 325);
};

window.addEventListener("load", draw);