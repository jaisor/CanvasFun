console.log("TEST");

const ctx = document.getElementById('canvas').getContext('2d');

var x = 300;
var y = 300;

ctx.fillStyle = 'blue';
ctx.fillRect(x, y, 100, 100);

function moveLeft() {
    console.log("Moving Left!");

    ctx.fillStyle = 'white  ';
    ctx.fillRect(x, y, 100, 100);     

    x = x - 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100);
}

function moveRight() {
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 100, 100);

    x = x + 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100); 
} 

function moveUp() { 
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 100, 100);

    y = y - 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100); 
}
function moveDown() { 
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 100, 100);

    y = y + 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 100, 100);
}

