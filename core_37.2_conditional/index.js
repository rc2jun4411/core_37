// C:\Users\rc2ju\OneDrive\Documents\core_37\core_37.2_conditional\index.js
// Making decisions in your code — conditionals

// ex-12.1 , 
// A note on comparison operators
// check print;
const para = document.getElementById("comparisonOperators");
para.textContent = "check !";

// example 1;
const para1 = document.getElementById("comparisonOperators1");
let cheese = "Cheddar";

// story: if cheese true  => { do this } 
//                  false => else { do that} 
// 表示方法 1:
// if (cheese) {
// para1.textContent = "variable is defined ! " + cheese;
// } else {
// para1.textContent = "variable is 'NOT' defined !" + cheese;
// }

// 表示方法 2:
if (cheese) {
para1.textContent = `variable is defined ! / cheese is "${cheese}"`;
} else {
para1.textContent = `variable is 'NOT' defined ! ${cheese}`;
}

// example 2;
const para2 = document.getElementById("comparisonOperators2");
let shoppingDone = false;
let childAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childAllowance = 10;
  para2.textContent = "shoppingDone = " + shoppingDone +
    " / childAllowance = " + childAllowance; // shopping not done yet
} else {
  childAllowance = 5;
  para2.textContent = "shopping done = " + shoppingDone +
    " / childAllowance = " + childAllowance; // shopping done
}

// ex-12.2, 
const select = document.getElementById("weather1");
const para3 = document.getElementById("weatherResult1"); // <= added copilot
select.addEventListener("change", setWeather1);

// mod.
function setWeather1() {
  let temperature = 100 ;
  const choice = select.value;
  if (choice === "sunny") {
      if (temperature < 86) {
    para3.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para3.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }

  } else if (choice === "rainy") {
    para3.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para3.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para3.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para3.textContent = "";
  }
}

// ex-12.3, Logical operators: AND "&&"
const select2 = document.getElementById("weather2");
const para4 = document.getElementById("weatherResult2"); // <= added copilot
select2.addEventListener("change", setWeather2);

function setWeather2() {
  let temperature = 100 ;
  const choice = select2.value;

if (choice === "sunny" && temperature < 86) {
  para4.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para4.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;

  } else if (choice === "rainy") {
    para4.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para4.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para4.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para4.textContent = "";
  }
}

// ex-12.4, Logical operators: OR "||"
let iceCreamVanOutside = "on fire";
let houseStatus        = "steady" ;
console.log("iceCreamVanOutside = " + iceCreamVanOutside);
console.log("houseStatus = " + houseStatus);

if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("OR example(true): You should leave the house quickly.");
} else {
  console.log("OR example(false): Probably should just stay in then.");
} 

// ex-12.5, Logical operators: NOT "!"
//   logical operator, NOT, expressed by the ! operator, 
//   can be used to negate an expression.
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("NOT example(true): Probably should just stay in then.");
} else {
  console.log("NOT example(false): You should leave the house quickly.");
}