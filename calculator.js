function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

function updateDisplay(operator, a, b) {
  const display = document.querySelector("#calc-display");
  display.innerHTML = `${a} ${operator} ${b}`;
}

function clearDisplay() {
  const display = document.querySelector("#calc-display");
  display.innerHTML = "";
  num1 = "";
  num2 = "";
  operator = "";
}

function backspace() {
  const display = document.querySelector("#calc-display");
  const displayText = display.textContent.split("");

  displayText.splice(-1, 1);
  display.textContent = displayText.join("");

  //updateDisplay();
  //display.innerHTML = "";
  //num1 = "";
  //num2 = "";
  //operator = "";
}

let num1 = "";
let num2 = "";
let operator = "";

// Add an event listener to each button that contributes to formula
const buttons = document.querySelectorAll(".formula-btn");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    let value = event.target.value;

    if (value === "-" && num1 === "") {
      num1 = "-";
    } else if (value === "-" && operator !== "" && num2 === "") {
      num2 = "-";
    } else if (!"/+-*".includes(value)) {
      if (operator === "") {
        if (value === "." && num1.includes(".")) {
          // do nothing
        } else {
          num1 += value;
        }
      } else {
        if (value === "." && num2.includes(".")) {
          // do nothing
        } else {
          num2 += value;
        }
      }
    } else {
      operator = value;
    }
    updateDisplay(operator, num1, num2);
    console.log(num1, operator, num2);
  }),
);

// Clear display  event listener
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", () => clearDisplay());

// Backspace event listener
const backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click", () => backspace());
