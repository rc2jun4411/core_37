// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.4.1_canvas\index.js

// mod. Gemini A1:
// step-1 add text into two canvas.
// X座標(x)とY座標(y)を受け取れるように変更
function draw_text(can, text, x = 0, y = 20) {
  const ctx = document.getElementById(can).getContext("2d");
  ctx.font = "18px serif";
  ctx.fillText(text, x, y);
}

let can1 = "canvas991";
let text1 = "canvas991, text1";
draw_text(can1, text1, 5, 20); // 少し右寄りに表示 (x:5, y:20)

let can2 = "canvas992";
let text2 = "canvas992, text2";
draw_text(can2, text2, 5, 20);

// step-2 add img into two canvas.
function draw_img(can, imgg) {
  const ctx = document.getElementById(can).getContext("2d");
  const img = new Image();
  img.addEventListener("load", () => {
    // 画像は Y=25 から配置
    ctx.drawImage(img, 5, 25, 70, 50); 
  });
  img.src = imgg;
}

let img1 = "cat-16px-1.png";
draw_img(can1, img1);
let img2 = "cat-16px-2.png";
draw_img(can2, img2);

// step-3 show variables into canvas
const myInt = 5;
const myFloat = 6.667;
//console.log(myInt, myFloat);
const headingA = document.querySelector("#heading_A");
headingA.innerHTML = `myInt = ${myInt} , variable type =(${typeof myInt})`;

let can3 = "canvas991";
let text3 = headingA.innerHTML;
// 画像（高さ50px）や1行目の下に来るよう Y座標を 95 などに指定
draw_text(can3, text3, 5, 95);


// old:
// // ex-14.9.10
// // step-1 add text into two canvas.
// function draw_text(can, text) {
//   const ctx = document.getElementById(can).getContext("2d");
//   ctx.font = "18px serif";
//   ctx.fillText(text, 0, 20);
// }
// let can1 = "canvas991"
// let text1 = "canvas991, text1";
// draw_text(can1, text1);

// let can2 = "canvas992"
// let text2 = "canvas992, text2";
// draw_text(can2, text2);

// // step-2 add img into two canvas.
// // ref ex-17.2, Creating images from scratch => function化
// function draw_img(can, imgg) {
//   const ctx = document.getElementById(can).getContext("2d");
//   const img = new Image(); // Create new img element
//   img.addEventListener("load", () => {
//   // drawImage(image, x, y, width, height) で幅と高さを指定して拡大表示
//   ctx.drawImage(img, 0, 24, 70, 50);  // 70px x 50px
// });
// img.src = imgg;
// }

// let img1 = "cat-16px-1.png"
// draw_img(can1, img1);
// let img2 = "cat-16px-2.png"
// draw_img(can2, img2);

// // step-3 show variables into canvas
// /* ref ex-50.20,  */
// // It's all numbers to me;
// const myInt = 5;
// const myFloat = 6.667;
// console.log(myInt, myFloat);
// const headingA = document.querySelector("#heading_A");
// // Gemini, 「値（5）」と「型（number）」を両方表示させたい場合
// headingA.innerHTML = `myInt = ${myInt} , variable type =(${typeof myInt})`;

// console.log(headingA.innerHTML);
// let can3 = "canvas991"
// let text3 = headingA.innerHTML; /* ??? can1内でtextが重なる ??? */
// draw_text(can3, text3);