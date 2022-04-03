const canvas=document.getElementById('snakeGame');
const ctx=canvas.getContext('2d');

let speed=7;

let tileCount=20;
let tileSize=canvas.width / tileCount-2;
let headX= 10;
let headY= 10;

let xVelocity=0;
let yVelocity=0;

//game loop
function drawGame() {
       clearScreen();
       changeSnakePosition();
       drawSnake();
       setTimeout(drawGame,1000/ speed);
}

function clearScreen() {
     ctx.fillStyle='darkslategray';
     ctx.fillRect(0,0,canvas.width,canvas.height);
}


function changeSnakePosition() {
       headX=headX + xVelocity;
       headY=headY + yVelocity;
}


function drawSnake() {
        ctx.fillStyle='green'
    ctx.fillRect(headX*tileCount, headY*tileCount,tileSize,tileSize);
}


document.body.addEventListener('keydown',function (event) {

    console.log(event.key);

    //up
   if (event.key=="ArrowUp"){
       yVelocity=-1;
       xVelocity=0;
   }

   //down
    if (event.key=="ArrowDown"){
        yVelocity=1;
        xVelocity=0;
    }

    //left
    if (event.key=="ArrowLeft"){
        yVelocity=0;
        xVelocity=-1;
    }

    //right
    if (event.key=="ArrowRight"){
        yVelocity=0;
        xVelocity=1;
    }


});


drawGame();