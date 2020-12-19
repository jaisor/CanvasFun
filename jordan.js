console.log("TEST");

const ctx = document.getElementById('canvas').getContext('2d');

window.requestAnimationFrame(draw);

function draw() {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 1080, 720); // clear canvas

    var timeInMs = Date.now();
    var x = (timeInMs/10) % 1000;

    ctx.fillStyle = 'green';
    ctx.fillRect(10 + x, 10, 10, 10);
    

    window.requestAnimationFrame(draw);
}