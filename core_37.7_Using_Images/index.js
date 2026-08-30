// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.7_Using_Images\index.js

// ex-17.1, Using images from the same page  
async function draw() {
  // Wait for all images to be loaded:
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const ctx = document.getElementById("canvas300").getContext("2d");
  // call drawImage() as usual
}
draw();


// ex-17.2, Creating images from scratch
const ctx1 = document.getElementById("canvas301").getContext("2d");
const img1 = new Image(); // Create new img element

img1.addEventListener("load", () => {
  // drawImage(image, x, y, width, height) で幅と高さを指定して拡大表示
  ctx1.drawImage(img1, 0, 0, 100, 100);  // 100x100 に拡大
});
img1.src = "cat-16px.png";


// ex-17.3, Embedding an image via data: URL
const ctx2 = document.getElementById("canvas302").getContext("2d");
const img2 = new Image(); // Create new img element
img2.addEventListener("load", () => {
  ctx2.drawImage(img2, 0, 0, 100, 100);  // 100x100 に拡大
});
img2.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";


// ex-17.4, Using other canvas elements => pass


// ex-17.5, Using frames from a video
//  ref. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
//  HTML Demo: <video></video>, Try it
const ctx3 = document.getElementById("canvas305").getContext("2d");


// ex-17.6, Drawing images, Example: A small line graph
// グリッドだけを描画
function draw_grid_only() {
  const ctx6 = document.getElementById("canvas306").getContext("2d");
  
  // 背景を描画
  ctx6.fillStyle = "#f0f0f0";
  ctx6.fillRect(0, 0, 300, 200);
  
  // グリッドを描画
  ctx6.strokeStyle = "#ddd";
  ctx6.lineWidth = 1;
  for (let i = 0; i <= 300; i += 30) {
    ctx6.beginPath();
    ctx6.moveTo(i, 0);
    ctx6.lineTo(i, 200);
    ctx6.stroke();
  }
  for (let i = 0; i <= 200; i += 30) {
    ctx6.beginPath();
    ctx6.moveTo(0, i);
    ctx6.lineTo(300, i);
    ctx6.stroke();
  }
}

// グリッド＋グラフを描画
function draw_graph() {
  const ctx6 = document.getElementById("canvas306").getContext("2d");
  
  // 背景を描画
  ctx6.fillStyle = "#f0f0f0";
  ctx6.fillRect(0, 0, 300, 200);
  
  // グリッドを描画
  ctx6.strokeStyle = "#ddd";
  ctx6.lineWidth = 1;
  for (let i = 0; i <= 300; i += 30) {
    ctx6.beginPath();
    ctx6.moveTo(i, 0);
    ctx6.lineTo(i, 200);
    ctx6.stroke();
  }
  for (let i = 0; i <= 200; i += 30) {
    ctx6.beginPath();
    ctx6.moveTo(0, i);
    ctx6.lineTo(300, i);
    ctx6.stroke();
  }
  
  // グラフの線を描画
  ctx6.strokeStyle = "red";
  ctx6.lineWidth = 2;
  ctx6.beginPath();
  ctx6.moveTo(30, 96);
  ctx6.lineTo(70, 66);
  ctx6.lineTo(103, 76);
  ctx6.lineTo(170, 15);
  ctx6.stroke();
}

// Canvas を PNG として保存（ダウンロード）
function downloadCanvasImage(canvasId, filename) {
  // 描画内容に応じて canvas を更新
  if (filename === 'grid.png') {
    draw_grid_only();
  } else if (filename === 'graph.png') {
    draw_graph();
  }
  
  // Canvas を画像として保存
  const canvas = document.getElementById(canvasId);
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = filename;
  link.click();
}

// 初期表示：グラフを描画
draw_graph();