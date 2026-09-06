// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.12.5_window_requestAnimationFrame() method\index.js

// ex-23.1 Advanced_animations, Window > requestAnimationFrame() method 

// 実装のポイント: gper oogle Gemini
// ・getContext("2d"): Canvasに2Dグラフィックスを描画するためのコンテキストを
//    取得します。
// ・clearRect(): これを忘れると、前のフレームの描画が残り、線のように伸びて
//    しまいます。毎フレーム必ず全画面を消去します。
// ・状態の更新: 描画したあとに座標（x, y）を変化させることで、次のフレームで
//    動いているように見せます。
const canvas = document.getElementById("canvas30");
const ctx = canvas.getContext("2d");

// ボールの初期状態
let x = 50;
let y = 50;
let dx = 2; // X軸の移動速度
let dy = 3; // Y軸の移動速度
const radius = 15;

function animate() {
  // 1. 前のフレームの描画をクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2. ボールを描画
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  // 3. 壁との衝突判定（跳ね返り）
  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - radius || y + dy < radius) {
    dy = -dy;
  }

  // 4. 座標を更新
  x += dx;
  y += dy;

  // 5. 次のフレームをリクエスト
  requestAnimationFrame(animate);
}

// アニメーションを開始
requestAnimationFrame(animate);
