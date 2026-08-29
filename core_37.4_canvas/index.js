// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.4_canvas\index.js

// ex-14.1, The <canvThe> element 


// ex-14.2, The rendering context 
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// ex-14.3, Checking for support
// Is targeted browser support "canvas" ?
const canvas3 = document.getElementById("canvas3");

if (canvas3.getContext) {
  const ctx = canvas3.getContext("2d");
  // drawing code here
  console.log("This browser suppot canvas");
} else {
  // canvas-unsupported code here
  console.log("This browser NOT suppot canvas");
}

// ex-14.4, A skeleton template
function draw() {
  const canvas4 = document.getElementById("canvas4");
  const ctx = canvas.getContext("2d");
}
draw();

// ex-14.5, A simple example
function draw1() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);
}
draw1();

// ex-14.6, Drawing shapes with canvas

// ex-14.7, Drawing shapes with canvas, Drawing rectangles
function draw2() {
  const canvas = document.getElementById("my-canvas1");
  const ctx = canvas.getContext("2d");

  ctx.fillRect(25, 25, 100, 100); // draws a large black square 100 pixels on each side.
  ctx.clearRect(45, 45, 60, 60);  // erases a 60x60 pixel square from the center
  ctx.strokeRect(50, 50, 50, 50); // create a rectangular outline 50x50 pixels within the cleared square
}
draw2();


// ex-14.8, Drawing shapes with canvas, Seeing blurry edges?
// =ぼかす=
// html, <canvas id="canvas8" width="15" height="15"></canvas>
// css, #canvas8 {width: 300px; height: 300px;}
//  "each canvas pixel is now represented by a 20x20 block of CSS pixels." 
// canvas上の描画は 縦横各20倍に増幅（=ぼける=）

// mod. copilot
const canvas8 = document.getElementById("canvas8");

function draw8(canvasx) {
  const ctx = canvasx.getContext("2d");
  ctx.strokeRect(2, 2, 10, 10);
  ctx.fillRect(7, 7, 1, 1);
}
function draw83(canvasx) {
  const ctx = canvasx.getContext("2d");
  ctx.strokeRect(2.5, 2.5, 9, 9);
  ctx.fillRect(7, 7, 1, 1);
}
draw8(canvas8);

// was
// function draw8(canvasx) {
//   const canvas = document.getElementById("canvasx");
//   const ctx = canvas.getContext("2d");
//   ctx.strokeRect(2, 2, 10, 10);
//   ctx.fillRect(7, 7, 1, 1);
// }
// draw8(canvas8); 


// ex-14.8.1, 
const canvas81 = document.getElementById("canvas81");
draw8(canvas81);

const canvas82 = document.getElementById("canvas82");
draw8(canvas82);

const canvas83 = document.getElementById("canvas83");
draw83(canvas83);

// ex-14.8.2, 
function draw84(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(3, 2);
  ctx.lineTo(9, 4.5);
  ctx.lineTo(6.5, 10.5);
  ctx.lineTo(0.5, 8);
  ctx.closePath();
  ctx.fill();
}

function drawFullScale() {
  const canvas = document.getElementById("canvas843");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(60, 40);
  ctx.lineTo(180, 90);
  ctx.lineTo(130, 210);
  ctx.lineTo(10, 160);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "lightgray";
  for (let i = 0; i < 16; i++) {
    ctx.moveTo(i * 20, 0);
    ctx.lineTo(i * 20, 300);
    ctx.moveTo(0, i * 20);
    ctx.lineTo(300, i * 20);
    ctx.stroke();
  }
}
draw84("canvas841");
draw84("canvas842");
drawFullScale();

// ex-14.9.1, Drawing paths, Drawing a triangle
function draw_triangle() {
  const canvas = document.getElementById("canvas91");
  const ctx = canvas.getContext("2d");

  // 1st triangle
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
  // 2nd triangle
  ctx.beginPath();  
  ctx.moveTo(125, 50);
  ctx.lineTo(150, 75);
  ctx.lineTo(150, 25);
  ctx.fillStyle = "red"; //塗色を指定　赤
  ctx.fill();
}
draw_triangle()

function draw_smile() {
  const canvas = document.getElementById("canvas91");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  ctx.strokeStyle = "lime"; // 線の色 "lime"
  ctx.lineWidth = 3; // 太さを 3ピクセルにする
  ctx.setLineDash([10, 5]); // 10px描いて、5px空ける
  ctx.stroke();
}
draw_smile()

// ex-14.9.2, Drawing paths, Arcs
function draw_arc() {
  const canvas = document.getElementById("canvas92");
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 50; // x coordinate
      const y = 25 + i * 50; // y coordinate
      const radius = 20; // Arc radius
      const startAngle = 0; // Starting point on circle
      const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}
draw_arc()

function draw_speech_balloon() {
  const canvas = document.getElementById("canvas93");
  const ctx = canvas.getContext("2d");

  // Quadratic curves example
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
}
draw_speech_balloon()

function draw_heart () {
  const canvas = document.getElementById("canvas94");
  const ctx = canvas.getContext("2d");

  // Cubic curves example
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
}
draw_heart ()

function draw_combinations() {
  const canvas = document.getElementById("canvas95");
  const ctx = canvas.getContext("2d");

  roundedRect(ctx, 12, 12, 184, 168, 15);
  roundedRect(ctx, 19, 19, 170, 154, 9);
  roundedRect(ctx, 53, 53, 49, 33, 10);
  roundedRect(ctx, 53, 119, 49, 16, 6);
  roundedRect(ctx, 135, 53, 49, 33, 10);
  roundedRect(ctx, 135, 119, 25, 49, 10);

  ctx.beginPath();
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill();

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
draw_combinations()

function draw_with_hole() {
  const canvas = document.getElementById("canvas96");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  // Outer shape clockwise ⟳
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 0);
  ctx.lineTo(75, 129.9);

  // Inner shape counterclockwise ↺
  ctx.moveTo(75, 20);
  ctx.lineTo(50, 60);
  ctx.lineTo(100, 60);

  ctx.fill();
}
draw_with_hole()

function draw_Path2D_example() {
  const canvas = document.getElementById("canvas97");
  const ctx = canvas.getContext("2d");

  const rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  const circle = new Path2D();
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);
}
draw_Path2D_example()

function draw_Path2D_SVG() {
  const canvas = document.getElementById("canvas98");
  const ctx = canvas.getContext("2d");
  const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
ctx.fill(p);
}
draw_Path2D_SVG()

