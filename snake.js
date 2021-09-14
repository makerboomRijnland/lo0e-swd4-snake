const WIDTH = 10;
const HEIGHT = 10;

let canvas = document.getElementById('snake');
canvas.style.border = "1px solid black";

let context = canvas.getContext('2d');

function drawSnakePart(x, y) {
    context.fillStyle = 'grey';
    context.fillRect(x, y, WIDTH, HEIGHT);
}

drawSnakePart(10, 10);
drawSnakePart(20, 10);
drawSnakePart(30, 10);
drawSnakePart(30, 20);
drawSnakePart(30, 30);

// context.fillRect(10, 10, WIDTH, HEIGHT);
// context.fillRect(20, 10, WIDTH, HEIGHT);
// context.fillRect(30, 10, WIDTH, HEIGHT);
// context.fillRect(30, 20, WIDTH, HEIGHT);
// context.fillRect(30, 30, WIDTH, HEIGHT);