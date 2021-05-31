const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xPositionCircle = 50;
let yPositionCircle = 100;
let xSpeedCircle = 7;
let ySpeedCircle = 7;
let radio = 2;

let xPositionCircle2 = 30;
let yPositionCircle2 = 18;
let xSpeedCircle2 = 6;
let ySpeedCircle2 = 6;
let radio2 = 5;

function draw(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(xPositionCircle > canvas.width - radio || xPositionCircle < radio){
        xSpeedCircle =- xSpeedCircle;
    }

    if(yPositionCircle > canvas.height - radio || yPositionCircle < radio){
        ySpeedCircle =- ySpeedCircle;
    }

    xPositionCircle += xSpeedCircle;
    yPositionCircle += ySpeedCircle;

    //círculo

    ctx.arc(xPositionCircle, yPositionCircle, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
/////////
    if(xPositionCircle2 > canvas.width - radio2 || xPositionCircle2 < radio2){
        xSpeedCircle2 =- xSpeedCircle2;
    }

    if(yPositionCircle2 > canvas.height - radio2 || yPositionCircle2 < radio2){
        ySpeedCircle2 =- ySpeedCircle2;
    }

    xPositionCircle2 += xSpeedCircle2;
    yPositionCircle2 += ySpeedCircle2;

    //círculo

    ctx.arc(xPositionCircle2, yPositionCircle2, radio2, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    window.requestAnimationFrame(draw);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(draw);
