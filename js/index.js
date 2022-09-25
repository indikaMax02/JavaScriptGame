const canvas=document.getElementById('snakeGame');
const ctx=canvas.getContext('2d');

/*class SnakePart{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
}*/

let speed=7;

let tileCount=20;
let tileSize=canvas.width / tileCount;
let headX= 10;
let headY= 10;
const snakeParts=new Array();
let tailLength=2;

let appleX=5;
let appleY=5;

let xVelocity=0;
let yVelocity=0;

let score=0;
//alert



//game loop


function drawGame() {
    changeSnakePosition();

    let result = isGameOver();
    if (result){
        return;
    }

       clearScreen();

       checkAppleCollection();
       drawApple();
       drawSnake();

       setTimeout(drawGame,1000/ speed);
}

function isGameOver() {
     let gameOver = false;

     if (yVelocity == 0 && xVelocity == 0){
         return false;
     }

     //walls
    if (headX < 0){
        gameOver = true;
    }
    if (headX >= tileCount){
        gameOver = true;
    }

    if (headY < 0){
        gameOver = true;
    }

    if (headY >= tileCount){
        gameOver = true;
    }

    for (let i in snakeParts){
        let part=snakeParts[i];
        if (part.x == headX && part.y == headY){
            gameOver = true;
            break;
        }
    }

    if (gameOver){
        /*ctx.fillStyle= 'white';
        ctx.font = '50px verdana'
        var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0","red");

        ctx.fillStyle=gradient;

        ctx.fillText("Game Over!" , canvas.width/6.5,canvas.height/2)*/

        janelaPopUp.abre( "example", 'p green',  'Game Over !' ,  'Your source : 40');

    }


    return gameOver;
}

function showScore() {
    score++;
   $('#score').text(score);

   /* ctx.fillStyle='white';
    ctx.font ='15px arial';

    ctx.fillText("score"+score , canvas.width/2,canvas.height/2);*/

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
    for (let i=0; i<snakeParts.length; i++){
        let part=snakeParts[i];
        ctx.fillRect(part.x*tileCount, part.y*tileCount , tileSize , tileSize);

    }

    ctx.fillStyle='orange'
    ctx.fillRect(headX*tileCount, headY*tileCount,tileSize,tileSize);

    snakeParts.push(new SnakePart(headX,headY));
    console.log(snakeParts.length);
     while(snakeParts.length > tailLength){
        snakeParts.shift();

    }
}

function checkAppleCollection() {
     if (appleX == headX & appleY==headY){
         appleX=Math.floor(Math.random() * tileCount);
         appleY=Math.floor(Math.random() * tileCount);
         tailLength++;
         showScore();
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