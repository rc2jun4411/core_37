// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.4_canvas\index.js

// ex-15.1, A fillStyle example; 
//  two for loops to draw a grid of rectangles, 
//  each in a different color. 
function draw_fillStyle() {
  const ctx = document.getElementById("canvas100").getContext("2d");

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = 
      `rgb(${Math.floor(255 - 42.5 * i)} 
           ${Math.floor(255 - 42.5 * j,)} 0)`;
      // 解説;
      // rgb(R G B)CSSの色指定形式です。
      // 赤(R)・緑(G)・青(B)の量を「0 〜 255」の数値で指定します。
      // ${ ... }（テンプレートリテラル）JavaScriptの文字列の中に、
      // 変数の計算結果を直接埋め込むための構文です。
      // Math.floor(...)小数点以下を切り捨てて、きれいな整数にする関数です。
      // 255 - 42.5 * i色の変化を計算する数式です。例えば 
      // i が 0, 1, 2, 3, 4, 5 と増えるごとに、
      // 数値が 255, 212, 170, 127, 85, 42, 0 と段階的に減っていきます。
      // （42.5 × 6 ＝ 255 なので、6段階で0になります）

        ctx.fillRect(j * 25, i * 25, 25, 25);
      //ctx.fillRect(i * 25, i * 25, 25, 25);
      //ctx.fillRect(j * 25, j * 25, 25, 25);
      //ctx.fillRect(i * 25, j * 25, 25, 25);

    }
  }
}
draw_fillStyle();

// ex-15.2, A strokeStyle example 
//  strokeStyle property to change the colors of the shapes' outlines. 
function draw_strokeStyle() {
  const ctx = document.getElementById("canvas101").getContext("2d");
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )})`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
      ctx.stroke();
    }
  }
}
draw_strokeStyle()

// ex-15.3, A globalAlpha example
function draw_globalAlpha() {
  const ctx = document.getElementById("canvas102").getContext("2d");
  // draw background
  ctx.fillStyle = "#ffdd00";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#66cc00";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#0099ff";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#ff3300";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "white";

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
} 
draw_globalAlpha()

// ex-15.4, An example using rgb() with alpha transparency
function draw_draw_globalAlpha1() {
  const ctx = document.getElementById("canvas103").getContext("2d");

  // Draw background
  ctx.fillStyle = "rgb(255 221 0)";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "rgb(102 204 0)";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "rgb(0 153 255)";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "rgb(255 51 0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Draw semi transparent rectangles
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = `rgb(255 255 255 / ${(i + 1) / 10})`;
    for (let j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }
} 
draw_draw_globalAlpha1();

// ex-15.5.1, Line styles, A lineWidth example
function draw_lineWidth() {
  const ctx = document.getElementById("canvas104").getContext("2d");
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
draw_lineWidth();

// ex-15.5.2, Line styles, A lineCap example
function draw_lineCap() {
  const ctx = document.getElementById("canvas105").getContext("2d");

  // Draw guides
  ctx.strokeStyle = "#0099ff";
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // Draw lines
  ctx.strokeStyle = "black";
  ["butt", "round", "square"].forEach((lineCap, i) => {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap;
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  });
}
draw_lineCap();

// ex-15.5.3, Line styles, A lineJoin example
// round, bevel, miter
function draw_lineJoin() {
  const ctx = document.getElementById("canvas106").getContext("2d");
  ctx.lineWidth = 10;
  ["round", "bevel", "miter"].forEach((lineJoin, i) => {
    ctx.lineJoin = lineJoin;
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  });
} 
draw_lineJoin();

// ex-15.5.4, Line styles, A demo of the miterLimit property
function draw_miterLimit() {
  const ctx = document.getElementById("canvas107").getContext("2d");
  const miterLimitInput = document.getElementById("miterLimit");

  // Clear canvas
  ctx.clearRect(0, 0, 150, 150);

  // Draw guides
  ctx.strokeStyle = "#0099ff";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Set line styles
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;

  // check input and set miterLimit
  const miterLimitValue = miterLimitInput.value;
  if (miterLimitValue && miterLimitInput.checkValidity()) {
    ctx.miterLimit = parseFloat(miterLimitValue);
  } else {
    // デフォルト値を設定
    ctx.miterLimit = 10;
  }

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (let i = 0; i < 24; i++) {
    const dy = i % 2 === 0 ? 25 : -25;
    ctx.lineTo(i ** 1.5 * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}

// 初期描画
draw_miterLimit();

// Redrawボタンにイベントリスナーを追加
document.getElementById("redraw").addEventListener("click", draw_miterLimit);


// ex-15.5.5, Line styles, Using line dashes
const ctx = document.getElementById("canvas108").getContext("2d");
let offset = 0;

function draw_lineDash() {
  ctx.clearRect(0, 0, canvas108.width, canvas108.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 5) {
    offset = 0;
  }
  draw_lineDash();
  setTimeout(march, 20);
}
march();


// ex-15.5.6, Line styles, Gradients,
//   A createLinearGradient example
//   createLinearGradient(x1, y1, x2, y2)
function draw_gradients() {
  const ctx = document.getElementById("canvas109").getContext("2d");

  // Create gradients,
  const linGrad = ctx.createLinearGradient(0, 0, 0, 150);
  linGrad.addColorStop(0, "#00ABEB");
  linGrad.addColorStop(0.5, "white");
  linGrad.addColorStop(0.5, "#26C000");
  linGrad.addColorStop(1, "white");

  const linGrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  linGrad2.addColorStop(0.5, "black");
  linGrad2.addColorStop(1, "transparent");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = linGrad;
  ctx.strokeStyle = linGrad2;

  // draw shapes
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
draw_gradients()


// ex-15.5.7, Line styles, Gradients,
//   A createRadialGradient example
//   createRadialGradient(x1, y1, r1, x2, y2, r2)
function draw_gradients1() {
  const ctx = document.getElementById("canvas110").getContext("2d");

  // Create gradients
  const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radGrad.addColorStop(0, "#A7D30C");
  radGrad.addColorStop(0.9, "#019F62");
  radGrad.addColorStop(1, "transparent");

  const radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radGrad2.addColorStop(0, "#FF5F98");
  radGrad2.addColorStop(0.75, "#FF0188");
  radGrad2.addColorStop(1, "transparent");

  const radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radGrad3.addColorStop(0, "#00C9FF");
  radGrad3.addColorStop(0.8, "#00B5E2");
  radGrad3.addColorStop(1, "transparent");

  const radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radGrad4.addColorStop(0, "#F4F201");
  radGrad4.addColorStop(0.8, "#E4C700");
  radGrad4.addColorStop(1, "transparent");

  // draw shapes
  ctx.fillStyle = radGrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 150, 150);
}
draw_gradients1()

// ex-15.5.8, Line styles, Gradients,
//   A createConicGradient example
//   createConicGradient(angle, x, y)
// 1. The first gradient is positioned in the center of 
//  the first rectangle and moves a green color stop at 
//  the start, to a white one at the end. 
//  The angle starts at 2 radians, which is noticeable 
//  because of the beginning/end line pointing south east.
// 
// 2. The second gradient is also positioned at the center
//  of the second rectangle. This one has multiple color 
//  stops, alternating from black to white at each quarter
//  of the rotation. This gives us the checkered effect.
//  
function draw_gradients2() {
  const ctx = document.getElementById("canvas111").getContext("2d");

  // Create gradients
  const conicGrad1 = ctx.createConicGradient(2, 62, 75);
  conicGrad1.addColorStop(0, "#A7D30C");
  conicGrad1.addColorStop(1, "white");

  const conicGrad2 = ctx.createConicGradient(0, 187, 75);
  // we multiply our values by Math.PI/180 to convert degrees to radians
  conicGrad2.addColorStop(0, "black");
  conicGrad2.addColorStop(0.25, "black");
  conicGrad2.addColorStop(0.25, "white");
  conicGrad2.addColorStop(0.5, "white");
  conicGrad2.addColorStop(0.5, "black");
  conicGrad2.addColorStop(0.75, "black");
  conicGrad2.addColorStop(0.75, "white");
  conicGrad2.addColorStop(1, "white");

  // draw shapes
  ctx.fillStyle = conicGrad1;
  ctx.fillRect(12, 25, 100, 100);
  ctx.fillStyle = conicGrad2;
  ctx.fillRect(137, 25, 100, 100);
}
draw_gradients2()


// ex-15.6 ・Patterns
// ex-15.6.1, A createPattern example
function draw_pattern() {
  const ctx = document.getElementById("canvas120").getContext("2d");

  // create new image object to use as pattern
  const img = new Image();
  img.src = "canvas_create_pattern.png";
  img.onload = () => {
    // create pattern
    const pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    // 縦横に2回繰り返す場合：
    // canvas のサイズが 300x300 で、
    // png画像が 150x150 なら 2x2 = 4 個のパターン（縦横2回ずつ）が表示されます
    // 
    ctx.fillRect(0, 0, 300, 300);
  };
}
draw_pattern()

// ex-15.7
// ex-15.7.1, A shadowed text example
function draw_shadow() {
  const ctx = document.getElementById("canvas121").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgb(0 0 0 / 50%)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
draw_shadow()