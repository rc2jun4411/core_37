// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.6_Drawing tetxt\index.js

// ex-16.1, =A fillText example;  
function draw_text() {
  const ctx = document.getElementById("canvas200").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
draw_text();

// ex-16.2, =A strokeText example; 
function draw_text1() {
  const ctx = document.getElementById("canvas201").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
draw_text1()

// Styling text
// ex-16.3, =A textBaseline example; 
function draw_text2() {
  // text
  const ctx = document.getElementById("canvas202").getContext("2d");
  ctx.font = "24px serif";

  ctx.textBaseline = "hanging";
  ctx.strokeText("hanging", 10, 70); // textを描画せよ！
  ctx.textBaseline = "middle";
  ctx.strokeText("middle", 120, 70); // textを描画せよ！
  ctx.textBaseline = "alphabetic";
  ctx.strokeText("alphabetic", 120, 40); // textを描画せよ！
  ctx.textBaseline = "ideographic";
  ctx.strokeText("ideographic", 120, 65); // textを描画せよ！
  ctx.textBaseline = "top";
  ctx.strokeText("top", 120, 0); // textを描画せよ！
  ctx.textBaseline = "bottom";
  ctx.strokeText("bottom", 120, 150); // textを描画せよ！

  // line  
  ctx.beginPath();
  ctx.moveTo(10, 70);
  ctx.lineTo(290, 70);
  ctx.strokeStyle = "red"; // 線の色を赤に設定（fillStyleではなくstrokeStyle）
  ctx.stroke();            // 線を描画せよ！  
}
draw_text2()

// ex-16.4, Advanced text measurements
function draw_measure() {
  const ctx = document.getElementById("canvas203").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  
  ctx.font = "16px serif"; // 
  
  console.log(text.width); // 13.9013671875
  ctx.fillText(`${text.width.toFixed(1)}`, 10, 50); // 小数第1位
    // copilot:
    //  テンプレートリテラル のバッククォートが足りないことです。
    //  ${} を使うには、文字列全体をバッククォート（`）で
    //  囲む必要があります。
// 赤色で fillText を描画
ctx.fillStyle = "red";
ctx.fillText(`${text.width.toFixed(1)}`, 10, 15);

// 青色で strokeText を描画
ctx.strokeStyle = "blue"
ctx.strokeText(`${text.width.toFixed(1)}`, 10, 30);
}
draw_measure()

// 