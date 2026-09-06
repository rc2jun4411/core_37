// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.12.5.1_Gemini_2\index.js
// ex-23.2
window.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById("canvas31");
const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// ボールの初期状態
let x = 50;
let y = 50;
// ボールの移動速度:
// 60fps の画面の場合：1秒間に60フレーム描画されるため、
// dx = 2 だと 1秒間に 120ピクセル（2px × 60回） 
// 移動することになります。
let dx = 3; // 180 px/秒
let dy = 1; //  60 px/秒
const radius = 15;

let animationId = null; // アニメーションを管理するID

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ボールの描画
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  // 壁との衝突判定
  if (x + dx > canvas.width - radius || x + dx < radius) dx = -dx;
  if (y + dy > canvas.height - radius || y + dy < radius) dy = -dy;

  x += dx;
  y += dy;

  // ループを継続し、IDを保存
  animationId = requestAnimationFrame(animate);
}

// 描画開始の処理
function startAnimation() {
  if (!animationId) { // 二重起動を防止
    animationId = requestAnimationFrame(animate);
    
    // ボタンの活性・非活性を切り替え
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

// 描画停止の処理
function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId); // アニメーションを止める
    animationId = null; // IDをリセット
    
    // ボタンの活性・非活性を切り替え
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

// ボタンにクリックイベントを設定
startBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);

// 初期状態としてアニメーションを開始しておく場合（不要なら消してもOK）
startAnimation();

});