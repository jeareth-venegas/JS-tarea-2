const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xPositionSquare = 500;
let yPositionSquare = 100;
let xSpeedSquare = 4;
let ySpeedSquare = 6;
let sq1 = 0;
let sq2 = 150;

function draw(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //cuadrado
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(xPositionSquare, yPositionSquare, 150, 150);
    ctx.closePath();

    if(xPositionSquare > canvas.width - sq1 || xPositionSquare > canvas.width - sq2 || xPositionSquare < sq1) {
        xSpeedSquare =- xSpeedSquare;
    }
    if(yPositionSquare > canvas.height - sq1 || yPositionSquare > canvas.height - sq2 || yPositionSquare < sq1){
        ySpeedSquare =- ySpeedSquare;;
    }
    xPositionSquare += xSpeedSquare;
    yPositionSquare += ySpeedSquare;

}
/*draw();
setInterval(draw, 10);*/
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(draw);
