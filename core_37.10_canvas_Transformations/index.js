// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.9.1_canvas_jpg_枠線_保存\index.js

// mod.3
// 1. HTML要素の取得
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download-btn'); // ボタンを取得

// 2. 全体を薄いグレーでクリア（確認用）
ctx.fillStyle = '#F0F0F0'; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 3. 102x110の枠を配置する座標とサイズ
const startX = 25;
const startY = 25;
const targetWidth = 102;
const targetHeight = 110;

// 4. 外枠（黒）を描画する
ctx.fillStyle = '#000000';
ctx.fillRect(startX, startY, targetWidth, targetHeight);

// 5. 内枠（白）を描画する
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(startX + 2, startY + 2, targetWidth - 4, targetHeight - 4);


// --- ボタンが押されたときに実行する保存処理 ---
downloadBtn.addEventListener('click', () => {
  // A. 切り取り用のテンポラリなCanvasをメモリ上に作成
  const saveCanvas = document.createElement('canvas');
  saveCanvas.width = targetWidth;   // 102px
  saveCanvas.height = targetHeight; // 110px
  const saveCtx = saveCanvas.getContext('2d');

  // B. 元のCanvasから枠線部分だけをコピー
  saveCtx.drawImage(
    canvas, 
    startX, startY, targetWidth, targetHeight, 
    0, 0, targetWidth, targetHeight
  );

  // C. コピーしたCanvasからJPEG画像のデータ（Base64）を作成
  const jpegDataUrl = saveCanvas.toDataURL('image/jpeg', 0.9);

  // D. ダウンロードを実行
  const downloadLink = document.createElement('a');
  downloadLink.href = jpegDataUrl;
  downloadLink.download = 'frame.jpg';
  downloadLink.click();
});
