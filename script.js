let canvas = document.getElementById("snake-game"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;
let colors = {
    snake: "#3A6351",
    bg: "#F2EDD7",
    food: "#E48257"
};
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = colors.bg;
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = colors.snake;
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = colors.food;
    context.fillRect(food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event){
    switch (event.keyCode) {
        case 37: //←
        case 65: //A
            if (direction != 'right') direction = 'left';
            break
        case 38: //↑
        case 87: //W
            if (direction != 'down') direction = 'up';
            break
        case 39: //→
        case 68: //W
            if (direction != 'left') direction = 'right';
            break
        case 40: //↓
        case 83: //S
            if (direction != 'up') direction = 'down';
            break
        default:
            break
    }
}

function iniciarJogo(){    

    if((snake[0].x > 15*box && direction == "right") || snake[0].x == 16*box) snake[0].x = 0;
    if((snake[0].x < 0 && direction == 'left') || snake[0].x == -1*box) snake[0].x = 15 * box;
    if((snake[0].y > 15*box && direction == "down") || snake[0].y == 16*box) snake[0].y = 0;
    if((snake[0].y < 0 && direction == 'up') || snake[0].y == -1*box) snake[0].y = 15 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            if (snake.length === 256) alert('Jogo Completo :D');
            else alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, (150 - (snake.length/4)));