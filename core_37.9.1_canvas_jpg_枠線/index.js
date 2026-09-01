// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.9.1_canvas_jpg_枠線\index.js

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


// // mod.2
// // 1. HTML側にあるCanvas要素を取得
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// // 2. 全体を薄いグレーでクリア（確認用）
// ctx.fillStyle = '#F0F0F0'; 
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// // 3. 102x110の枠を配置する座標とサイズ
// const startX = 25;
// const startY = 25;
// const targetWidth = 102;
// const targetHeight = 110;

// // 4. 外枠（黒）を描画する
// ctx.fillStyle = '#000000';
// ctx.fillRect(startX, startY, targetWidth, targetHeight);

// // 5. 内枠（白）を描画する
// ctx.fillStyle = '#FFFFFF';
// ctx.fillRect(startX + 2, startY + 2, targetWidth - 4, targetHeight - 4);


// // --- 追加・修正：ここから特定の範囲を「frame.jpg」として保存する処理 ---

// // A. 切り取り用のテンポラリ（一時的）なCanvasをメモリ上に作成する
// const saveCanvas = document.createElement('canvas');
// saveCanvas.width = targetWidth;   // 102px
// saveCanvas.height = targetHeight; // 110px
// const saveCtx = saveCanvas.getContext('2d');

// // B. 元のCanvasから、枠線がある部分（25, 25の位置から102x110）だけをコピーして貼り付ける
// // drawImage(コピー元, 元のX, 元のY, 元の幅, 元の高さ, 貼り付けX, 貼り付けY, 貼り付け幅, 貼り付け高)
// saveCtx.drawImage(
//   canvas, 
//   startX, startY, targetWidth, targetHeight, 
//   0, 0, targetWidth, targetHeight
// );

// // C. コピーしたCanvasからJPEG画像のデータ（Base64）を作成
// const jpegDataUrl = saveCanvas.toDataURL('image/jpeg', 0.9);

// // D. 擬似的にリンクをクリックさせて「frame.jpg」という名前でダウンロード実行
// const downloadLink = document.createElement('a');
// downloadLink.href = jpegDataUrl;
// downloadLink.download = 'frame.jpg'; // 保存するファイル名を指定
// downloadLink.click();



// // mod.1
// // 1. HTML側にあるCanvas要素（横152 x 縦160）をIDで取得する
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// // ※HTMLのサイズを基準にするため、JS側での新規作成やサイズ上書きはしない

// // 2. 全体をいったん透明、または背景色（例: グレーや白）でクリアする
// //（ここではキャンバス全体を分かりやすく薄いグレーにしてみます。不要なら削除してください）
// ctx.fillStyle = '#F0F0F0'; 
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// // 3. 102x110の枠を「中央」に配置するための開始座標(X, Y)を計算
// // 余白50pxの半分である「25px」ずつ内側に寄せます
// const startX = 25;
// const startY = 25;
// const targetWidth = 102;
// const targetHeight = 110;

// // 4. 外枠（黒）を描画する
// ctx.fillStyle = '#000000';
// ctx.fillRect(startX, startY, targetWidth, targetHeight);

// // 5. 内枠（白）を描画する（線幅2px分、上下左右を内側に入れる）
// // 左上座標に+2px、サイズは幅・高さからそれぞれ-4px（2px × 2）する
// ctx.fillStyle = '#FFFFFF';
// ctx.fillRect(startX + 2, startY + 2, targetWidth - 4, targetHeight - 4);

// // 6. JPEG画像としてデータURL（Base64）に変換（キャンバス全体の152x160サイズになります）
// const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.9);

// // （参考）画面に別で画像として追加表示したい場合
// const img = new Image();
// img.src = jpegDataUrl;
// document.body.appendChild(img);

// old
// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.9_canvas_jpg_枠線\index.js
// // ex-17.10, Using images, Frame
// // 1. Canvas要素を作成 横 152(102+50) x 縦 160(110+50)
// const canvas = document.createElement('canvas');
// canvas.width = 102;
// canvas.height = 110;
// const ctx = canvas.getContext('2d');

// // 2. 全体を「黒（枠線の色）」で塗りつぶす
// ctx.fillStyle = '#000000';
// ctx.fillRect(0, 0, 102, 110);

// // 3. 内側（2px引いた領域）を「白」で塗りつぶす
// // 左上(2, 2)から、横幅98px(102-4)、縦幅106px(110-4)の範囲
// ctx.fillStyle = '#FFFFFF';
// ctx.fillRect(2, 2, 98, 106);

// // 4. JPEG画像としてデータURL（Base64）に変換
// const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.9);

// // （参考）画面に画像を表示したい場合
// const img = new Image();
// img.src = jpegDataUrl;
// document.body.appendChild(img);
