console.log("TEST");

const ctx = document.getElementById('canvas').getContext('2d');

var x = 300

ctx.fillStyle = 'blue';
ctx.fillRect(x, 200, 100, 100);

function moveLeft() {
    console.log("Moving Left!");

    ctx.fillStyle = 'white  ';
    ctx.fillRect(x, 200, 100, 100);     

    x = x - 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, 200, 100, 100);
}



function moveRight() {
    ctx.fillStyle = 'white  ';
    ctx.fillRect(x, 200, 100, 100);

    x = x + 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, 200, 100, 100); 
}