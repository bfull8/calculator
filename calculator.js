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
  const [numA, numB] = [Number(a), Number(b)];
  switch (operator) {
    case "+":
      return add(numA, numB);
      break;
    case "-":
      return subtract(numA, numB);
      break;
    case "*":
      return multiply(numA, numB);
      break;
    case "/":
      return divide(numA, numB);
      break;
  }
}

function updateDisplay() {
  const display = document.querySelector("#calc-display");
  // Once a second number is being typed, show that number instead of the formula.
  display.textContent = num2 !== "" ? num2 : num1;
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay();
}

function backspace() {
  if (num2 !== "") {
    num2 = num2.slice(0,-1);
  } else {
    num1 = num1.slice(0,-1)
  }
  updateDisplay();
}

function calculateFormula() {
  const result = operate(operator, num1, num2);
  const display = document.querySelector("#calc-display");
  display.textContent = `${result}`;

  num1 = result;
  operator = "";
  num2 = "";
}

// global variables for formula
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
      // Before a second number is entered, this simply changes the operator.
      // After both numbers are present, calculate and use that result going forward.
      if (num1 !== "" && operator !== "" && num2 !== "") {
        calculateFormula();
      }

      if (num1 !== "") {
        operator = value;
      }
    }
    updateDisplay();
  }),
);

// Clear display  event listener
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", () => clearDisplay());

// Backspace event listener
const backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click", () => backspace());

// Calculate formula
const equalsBtn = document.querySelector("#equals-btn");
equalsBtn.addEventListener("click", () => {
  if (num2 !== "") {
    calculateFormula();
  }

});