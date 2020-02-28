const canvas = document.getElementById("jsCanvas");
const colorBox = document.querySelectorAll("#jsColorBox div");
const range = document.getElementById("jsRange");
const modeButton = document.getElementById("jsMode");
const saveButton = document.getElementById("jsSave");
const ctx = canvas.getContext("2d");

let paint = false;
let color = "#2c2c2c";
// 이게 무슨 읐인지 모르겠다
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStyle = color;
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

function mouseDown() {
  paint = true;
}

function mouseUp() {
  paint = false;
}

function mouseLeave() {
  paint = false;
}

function handleModeBtnClick() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleSaveBtnClick() {
  let imgUrl = canvas.toDataURL("image/jpg");
  var imgDownTag = document.createElement("a");
  imgDownTag.download = "canvas.jpg";
  imgDownTag.href = imgUrl;
  imgDownTag.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", mouseOver);
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mouseleave", mouseLeave);
  canvas.addEventListener("mouseup", mouseUp);

  colorBox.forEach(ele => {
    ele.addEventListener("click", () => {
      color = ele.style.backgroundColor;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
    });
  });

  range.addEventListener("change", () => {
    ctx.lineWidth = range.value;
  });

  modeButton.addEventListener("click", handleModeBtnClick);
  saveButton.addEventListener("click", handleSaveBtnClick);
}
