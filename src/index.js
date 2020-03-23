const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'lightblue';


function drowSnowman (x, y, radius, fullOrHalf = true, filling = true) { //eslint-disable-line
    ctx.beginPath();

    ctx.lineWidth = 5;
    fullOrHalf ? ctx.arc(x, y, radius, 0, 2 * Math.PI) : //eslint-disable-line
                ctx.arc(x, y, radius, 0, Math.PI, true); //eslint-disable-line

    filling ? ctx.fill() : ctx.stroke();
}

// snowman's body
ctx.strokeStyle = 'lightblue';
drowSnowman (250, 100, 50, true, false); //eslint-disable-line
drowSnowman (250, 220, 70, true, false); //eslint-disable-line
drowSnowman (250, 380, 90, true, false);//eslint-disable-line

// snowman's eyes
ctx.strokeStyle = 'black';
drowSnowman (230, 90, 7, false, false); //eslint-disable-line
drowSnowman (270, 90, 7, false, false); //eslint-disable-line

// snowman's buttons
ctx.fillStyle = 'orange';
drowSnowman (250, 200, 10); //eslint-disable-line
drowSnowman (250, 240, 10); //eslint-disable-line
drowSnowman (250, 340, 10); //eslint-disable-line
drowSnowman (250, 380, 10); //eslint-disable-line
drowSnowman (250, 420, 10); //eslint-disable-line

// snowman's COVID-19
ctx.fillStyle = 'aqua';

ctx.fillRect(220, 100, 60, 30); //eslint-disable-line

drowSnowman (230, 115, 15); //eslint-disable-line
drowSnowman (270, 115, 15); //eslint-disable-line

ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.moveTo(200,90); //eslint-disable-line
ctx.lineTo(290, 135); //eslint-disable-line
ctx.moveTo(210,135); //eslint-disable-line
ctx.lineTo(300, 90); //eslint-disable-line
ctx.stroke();
