let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

// ctx.fillStyle = "#f6e204";
// ctx.fillRect(100,100,50,50);

// ctx.strokeStyle = "#f6e204";
// ctx.strokeRect(50,50,50,50);

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(100,100);
// ctx.closePath();
// ctx.strokeStyle = "#f6e204";
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(100,100);
// ctx.lineTo(50,100);
// ctx.strokeStyle = "#f6e204";
// ctx.stroke();

ctx.beginPath();
ctx.arc(100,50,50,0,Math.PI/2);
ctx.strokeStyle = "#f6e204";
ctx.stroke();