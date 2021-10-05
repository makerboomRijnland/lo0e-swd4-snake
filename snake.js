const WIDTH = 10;
const HEIGHT = 10;

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

let canvas = document.getElementById("snake");
canvas.style.border = "1px solid black";

let context = canvas.getContext("2d");

let snake = {
    direction: DOWN,
    parts: [ // 0 => head
        { x: 10, y: 30 },  // x: 20, y: 30
        { x: 10, y: 20 },  // x: 10, y: 30
        { x: 10, y: 10 }], // x: 10, y: 20
};

let apple = {
    x: null,
    y: null
};


function refresh() {
    for (let index = snake.parts.length - 1; index >= 1; index--) {
        let part = snake.parts[index];
        let prevPart = snake.parts[index - 1];
        
        part.x = prevPart.x;
        part.y = prevPart.y;
    }

    let head = snake.parts[0];
    if (snake.direction == RIGHT) {
        head.x = head.x + WIDTH;
    } else {
        if (snake.direction == LEFT) {
            head.x = head.x - WIDTH;
        } else {
            if (snake.direction == UP) {
                head.y = head.y - HEIGHT;
            } else {
                head.y = head.y + HEIGHT;
            }
        }
    }
    
    // HEAD HAS NEW POSITION;

    drawSnake();
    drawApple();
}

function eatApple() {
    // Als x & y van snake.parts[0] gelijk zijn aan de x & y van de apple.
    // Voeg een nieuw element toe aan de snake.parts.
}

function spawnApple() {
    apple.x = Math.round(Math.random() * 60) * 10;
    apple.y = Math.round(Math.random() * 40) * 10;
}

function drawApple(){
    context.fillStyle = "red";
    context.fillRect(apple.x, apple.y, WIDTH, HEIGHT);
}

function drawSnake() {
    context.clearRect(0, 0, 600, 400); // Maak het canvas leeg!
    for (let index = 0; index < snake.parts.length; index++) {
        let part = snake.parts[index];
        drawSnakePart(part.x, part.y);
    }
}

function drawSnakePart(x, y) {
    context.fillStyle = "grey";
    context.fillRect(x, y, WIDTH, HEIGHT);
}

function changeDirection(event) {
    console.log(event);
    let code = event.code;

    if (event.code == "ArrowRight") {
        // ALS huidige direction niet LINKS is..
        if (snake.direction != LEFT) {
            snake.direction = RIGHT;
        }

    } else if (event.code == "ArrowLeft") {
        if(snake.direction != RIGHT) {
            snake.direction = LEFT;
        }

    } else if (event.code == "ArrowUp") {
        if(snake.direction != DOWN) {
            snake.direction = UP;
        }
    } else if (event.code == "ArrowDown") {
        if(snake.direction != UP) {
            snake.direction = DOWN;
        }
    }
}

document.addEventListener("keydown", changeDirection);

setInterval(refresh, 1000);
spawnApple();

// reageren op pijltjes toetsen.
