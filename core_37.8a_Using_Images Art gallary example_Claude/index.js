// C:\Users\rc2ju\Desktop\files\index.js

// ex-17.9, Using images, Art gallary example

// mod.
async function draw_gallary() {
  // 1. すべての画像が確実に読み込まれるのを待つ
  await Promise.all(
    Array.from(document.images).map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolve) => {
        image.addEventListener("load", resolve);
        image.addEventListener("error", resolve);
      });
    })
  );

  const frameImage = document.getElementById("frame");
  if (!frameImage) return;

  // フレーム画像が読み込まれるまで待つ
  if (!frameImage.complete) {
    await new Promise((resolve) => {
      frameImage.addEventListener("load", resolve);
      frameImage.addEventListener("error", resolve);
    });
  }

  // 2. 画像のリストを取得
  const images = Array.from(document.images);
  // フレーム画像の実際のサイズを取得
  const frameWidth = frameImage.naturalWidth || frameImage.width || 132;
  const frameHeight = frameImage.naturalHeight || frameImage.height || 150;

  // 3. 各画像に対してキャンバスを作成して描画
  for (const image of images) {
    // 額縁画像自体はスキップ
    if (image.id === "frame") continue;

    // キャンバスを作成
    const canvas = document.createElement("canvas");
    canvas.width = frameWidth;
    canvas.height = frameHeight;

    // 元の画像の直前にキャンバスを挿入
    image.parentNode.insertBefore(canvas, image);

    // 元の画像は非表示にする（キャンバスに置き換えるため）
    image.style.display = "none";

    const ctx = canvas.getContext("2d");
    if (ctx) {
      // 背景を透明にクリア
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 絵の描画領域（額縁の内側の白い部分）のサイズを指定して描画
      // canvas_picture_frame.png (117x126) の内側の白い部分を実測すると
      // 左上 (17, 9) から 幅84 x 高さ104 の範囲になる
      ctx.drawImage(image, 17, 9, 84, 104);

      // 額縁を上から重ねて描画
      ctx.drawImage(frameImage, 0, 0, frameWidth, frameHeight);
    }
  }
}

// 実行
draw_gallary();


// old, MDNのexample
// async function draw_gallary() {
//   // Wait for all images to be loaded.
//   await Promise.all(
//     Array.from(document.images).map(
//       (image) =>
//         new Promise((resolve) => image.addEventListener("load", resolve)),
//     ),
//   );

//   // Loop through all images.
//   for (const image of document.images) {
//     // Don't add a canvas for the frame image
//     if (image.getAttribute("id") !== "frame") {
//       // Create canvas element
//       const canvas = document.createElement("canvas");
//       canvas.setAttribute("width", 132);
//       canvas.setAttribute("height", 150);

//       // Insert before the image
//       image.parentNode.insertBefore(canvas, image);

//       ctx = canvas.getContext("2d");

//       // Draw image to canvas
//       ctx.drawImage(image, 15, 20);

//       // Add frame
//       ctx.drawImage(document.getElementById("frame"), 0, 0);
//     }
//   }
// }
// draw_gallary();