// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.10_canvas_Transformations\index.js

// ex-20.0
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(2, 2, 150, 150); // Draw a Black rectangle with default settings
  ctx.save(); // Save the original default state

  ctx.fillStyle = "#0099ff"; // Make changes to saved settings
  ctx.fillRect(15, 15, 120, 120); // Draw a Blue rectangle with new settings
  ctx.save(); // Save the current state

  ctx.fillStyle = "white"; // Make changes to saved settings
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90); // Draw a 50%-White rectangle with newest settings

  ctx.restore(); // Restore to previous state
  ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored Blue setting

  ctx.restore(); // Restore to original state
  ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored Black setting
}
draw();


// ex-20.1
function draw_trans() {
  const ctx = document.getElementById("canvas1").getContext("2d");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = `rgb(${51 * i} ${255 - 51 * i} 255)`;
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
draw_trans();


// ex-20.2
function draw_rotate() {
  const ctx = document.getElementById("canvas2").getContext("2d");

  // left rectangles, rotate from canvas origin
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // rotate
  ctx.translate(-200, -80); // translate back

  // draw grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
draw_rotate();


// ex-20.3
function draw_scale() {
  const ctx = document.getElementById("canvas3").getContext("2d");

  // draw a simple rectangle, but scale it.
  ctx.save();
  ctx.scale(10, 3); // scale context horizontally by 10 and 
                    // vertically by 3
  ctx.fillRect(1, 10, 10, 10); // origin(1, 10) lx=10, ly=10 
                               // scaling resulted lx=10x10=100, ly=10x3=30
  ctx.restore();

  // mirror horizontally
  ctx.scale(-1, 1); // scale context horizontally by -1(mirror)
                    // vertically by 1(normal = as is)
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120); // "MDN"の書き出し点(-135, 120)
                                  // x=0のmirror鏡像で描画
}
draw_scale();


// ex-20.4
function draw_tMatrix() {
  const ctx = document.getElementById("canvas4").getContext("2d");

  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  let c = 0;
  for (let i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = `rgb(${c} ${c} ${c})`;
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgb(255 128 255 / 50%)";
  ctx.fillRect(0, 50, 100, 100);
}
draw_tMatrix();