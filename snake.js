const WIDTH = 10;
const HEIGHT = 10;

let canvas = document.getElementById('snake');
canvas.style.border = "1px solid black";

let context = canvas.getContext('2d');

function drawSnakePart(x, y) {
    context.fillStyle = 'grey';
    context.fillRect(x, y, WIDTH, HEIGHT);
}

for(let x = 10; x <= 50; x = x + 10) {
    drawSnakePart(x, 50);
}

// drawSnakePart(10, 10);
// drawSnakePart(20, 10);
// drawSnakePart(30, 10);
// drawSnakePart(40, 10);
// drawSnakePart(50, 10);

// context.fillRect(10, 10, WIDTH, HEIGHT);
// context.fillRect(20, 10, WIDTH, HEIGHT);
// context.fillRect(30, 10, WIDTH, HEIGHT);
// context.fillRect(30, 20, WIDTH, HEIGHT);
// context.fillRect(30, 30, WIDTH, HEIGHT);