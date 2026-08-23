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

let num1 = "";
let num2 = "";
let operator = "";

// Add an event listener to each button
const buttons = document.querySelectorAll("button");
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
    console.log(num1, operator, num2);
  }),
);
