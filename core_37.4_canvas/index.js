// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.4_canvas\index.js

// ex-14.1, The <canvThe> element 


// ex-14.2, The rendering context 
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// ex-14.3, Checking for support
// Is targeted browser support "canvas" ?
const canvas3 = document.getElementById("canvas3");

if (canvas3.getContext) {
  const ctx = canvas3.getContext("2d");
  // drawing code here
  console.log("This browser suppot canvas");
} else {
  // canvas-unsupported code here
  console.log("This browser NOT suppot canvas");
}

// ex-14.4, A skeleton template
function draw() {
  const canvas4 = document.getElementById("canvas4");
  const ctx = canvas.getContext("2d");
}

draw();

// ex-14.5, 