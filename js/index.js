const canvas=document.getElementById('snakeGame');
const ctx=canvas.getContext('2d');

let speed=7;

let tileCount=20;
let tileSize=canvas.width / tileCount;
let headX= 10;
let headY= 10;

let appleX=5;
let appleY=5;

let xVelocity=0;
let yVelocity=0;

//game loop
function drawGame() {
       clearScreen();
       changeSnakePosition();
       checkAppleCollection();
       drawApple();
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

function checkAppleCollection() {
     if (appleX == headX & appleY==headY){
         appleX=Math.floor(Math.random() * tileCount);
         appleY=Math.floor(Math.random() * tileCount);
     }
}

function drawApple(){
    ctx.fillStyle='red';
    ctx.fillRect(appleX*tileCount,appleY*tileCount,tileSize,tileSize);
}

document.body.addEventListener('keydown',function (event) {

    console.log(event.key);

    //up
   if (event.key=="ArrowUp"){
       if (yVelocity==1){
           return;
       }
       yVelocity=-1;
       xVelocity=0;
   }

   //down
    if (event.key=="ArrowDown"){
        if (yVelocity==-1){
            return;
        }
        yVelocity=1;
        xVelocity=0;
    }

    //left
    if (event.key=="ArrowLeft"){
        if (xVelocity==1){
            return;
        }
        yVelocity=0;
        xVelocity=-1;
    }

    //right
    if (event.key=="ArrowRight"){
        if (xVelocity==-1){
            return;
        }
        yVelocity=0;
        xVelocity=1;
    }


});


drawGame();