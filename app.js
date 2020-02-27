const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

let paint = false;

// 이게 무슨 읐인지 모르겠다
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function mouseOver(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  if (!paint) {
    // 그림을 그려준다
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function mouseDown(event) {
  paint = true;
}

function mouseUp(event) {
  paint = false;
}

function mouseLeave(event) {
  paint = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", mouseOver);
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mouseleave", mouseLeave);
  canvas.addEventListener("mouseup", mouseUp);
}
