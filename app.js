const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(360, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 120, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(310, 100, 5, 0, 2 * Math.PI);
ctx.arc(280, 100, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(300, 130, 20, 2 * Math.PI, 1 * Math.PI);
ctx.fill();
ctx.beginPath();

let isPainting = false;

function onMove(e) {
  const { offsetX: x, offsetY: y } = e;
  if (isPainting) {
    ctx.lineTo(x, y);
    ctx.stroke();
    return;
  }
  ctx.moveTo(x, y);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
