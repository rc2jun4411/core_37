// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.9 _canvas_jpg_枠線\index.js

// ex-17.10, Using images, Frame
// 1. Canvas要素を作成 横 152(102+50) x 縦 160(110+50)
const canvas = document.createElement('canvas');
canvas.width = 102;
canvas.height = 110;
const ctx = canvas.getContext('2d');

// 2. 全体を「黒（枠線の色）」で塗りつぶす
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, 102, 110);

// 3. 内側（2px引いた領域）を「白」で塗りつぶす
// 左上(2, 2)から、横幅98px(102-4)、縦幅106px(110-4)の範囲
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(2, 2, 98, 106);

// 4. JPEG画像としてデータURL（Base64）に変換
const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.9);

// （参考）画面に画像を表示したい場合
const img = new Image();
img.src = jpegDataUrl;
document.body.appendChild(img);
