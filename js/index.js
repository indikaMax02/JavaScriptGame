const canvas=document.getElementById('snakeGame');
const ctx=canvas.getContext('2d');

let speed=7;

let tileCount=20;
let tileSize=canvas.width / tileCount-2;
let headX= 10;
let headY= 10;

//game loop
function drawGame() {
       clearScreen();
       drawSnake();
       setTimeout(drawGame,1000/ speed);
}

function clearScreen() {
     ctx.fillStyle='darkslategray';
     ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake() {
        ctx.fillStyle='green'
    ctx.fillRect(headX*tileCount, headY*tileCount,tileSize,tileSize);
}

drawGame();