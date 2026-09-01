// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.7.1_canvas_API_drawImage\index.js
// ex-17.8.1, Using images, Slicing, error fix 
const canvas = document.getElementById("canvas400");
const ctx = canvas.getContext("2d"); // error, 
  // index.js:4 Uncaught TypeError: Cannot read properties of null (reading 'getContext')
  //  Wrong => document.getElementById("#canvas400");
  //  Good  => document.getElementById("canvas400");
  //    CSS, 
  //  #canvas408 {
  //  border: 1px solid black;
  //  }

const image = document.getElementById("source");
image.crossOrigin = "anonymous"; // CORS制限を回避する設定

image.addEventListener("load", (e) => {
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
});
