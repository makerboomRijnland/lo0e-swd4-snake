const WIDTH = 10;
const HEIGHT = 10;

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

let canvas = document.getElementById('snake');
canvas.style.border = "1px solid black";

let context = canvas.getContext('2d');

let snake = {
    direction: DOWN,
    parts: [
        {x: 10, y: 10}
    ]
};

function refresh() {
    for(let index = 0; index < snake.parts.length; index++) {
        let part = snake.parts[index];
        if(snake.direction == RIGHT) {
            part.x = part.x + WIDTH;
        } else {
            if(snake.direction == LEFT) {
                part.x = part.x - WIDTH;
            } else {
                if(snake.direction == UP) {
                    part.y = part.y - HEIGHT;
                } else {
                    part.y = part.y + HEIGHT;
                }
            }
        }

    }
    drawSnake();
}

function drawSnake() {
    context.clearRect(0, 0, 600, 400); // Maak het canvas leeg!
    for(let index = 0; index < snake.parts.length; index++) {
        let part = snake.parts[index];
        drawSnakePart(part.x, part.y);
    }
}

function drawSnakePart(x, y) {
    context.fillStyle = 'grey';
    context.fillRect(x, y, WIDTH, HEIGHT);
}


setInterval(refresh, 1000);
