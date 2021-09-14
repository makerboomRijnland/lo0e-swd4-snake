let canvas = document.getElementById('snake');
canvas.style.border = "1px solid black";

let context = canvas.getContext('2d');

context.fillStyle = 'grey';

context.fillRect(10, 10, 10, 10);
context.fillRect(20, 10, 10, 10);
context.fillRect(30, 10, 10, 10);
context.fillRect(30, 20, 10, 10);
context.fillRect(30, 30, 10, 10);