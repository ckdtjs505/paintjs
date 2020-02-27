const canvas = document.getElementById("jsCanvas");

let paint = false;

function mouseOver(event) {
  if (paint) {
    // 그림을 그려준다
    console.log("paint");
    const ctx = canvas.getContext("2d");
    let x = event.offsetX;
    let y = event.offsetY;
    console.log(x, y);
    ctx.fillRect(x, y, 3, 3);
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
