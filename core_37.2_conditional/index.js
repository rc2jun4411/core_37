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

// ex-12.6, switch statements
// 1.pseudocode:
let expression = null;
let choice1, choice2 =null;

switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}

// 2. A switch example
const select5 = document.querySelector("#weather3");
const para5 = document.querySelector("#weatherResult3");

select5.addEventListener("change", setWeather3);

function setWeather3() {
  const choice = select5.value;

  switch (choice) {
    case "sunny":
      para5.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para5.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para5.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para5.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para5.textContent = "";
  }
}


// ex-12.7, Document: querySelector() method
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = document.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
}); 


// ex-12.8, Ternary operator example
const select6 = document.querySelector("#theme");
//const html = document.querySelector("#html");
const html = document.documentElement; //HTML に id="html" がない
//ため html は null です。document.querySelector("#html");をやめて、
//document.documentElement;を使う。

document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select6.addEventListener("change", () =>
  select6.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);


// ex-12.9, Implementing a basic calendar
const select7 = document.querySelector("#month");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select7.addEventListener("change", () => {
  const choice = select7.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE
  if (month === "February") {
    days = 28;
  } else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select7.value = "January";
createCalendar("January");
