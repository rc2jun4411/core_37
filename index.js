// C:\Users\rc2ju\OneDrive\Documents\core_37\index.js

// ex-10 , Making decisions in your code — conditionals
// A real example;
let shoppingDone = false;
let childAllowance;
if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
// check ex-10
document.getElementById("result10").textContent = 
  "shoppingDone = " + shoppingDone + " / childAllowance = " + childAllowance;


// ex-11.1, Weather
const select = document.querySelector("select");
const para = document.querySelector("p");
select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
// check ex-11.1
document.getElementById("result11").textContent = 
  "select = " + select + " / para = " + para;

//ex-11.2, Plan
 