let canvas = document.getElementById('snake');
canvas.style.border = "1px solid black";

let context = canvas.getContext('2d');

context.fillStyle = 'grey';
context.fillRect(20, 50, 10, 10);