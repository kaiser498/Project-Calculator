let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => (b === 0 ? "Undefined" : a / b);

let firstInput = "";
let operator = "";
let currentInput = "0";

function operate(op, n1, n2) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  switch (op) {
    case "+":
      return add(n1, n2);
      break;
    case "+":
      return subtract(n1, n2);
      break;
    case "+":
      return multiply(n1, n2);
      break;
    case "+":
      return divide(n1, n2);
      break;
    default:
      return;
  }
}

const calculatorDisplay = document.querySelector("#calculator-display");
const numbersBtn = document.querySelectorAll(".number-button");
const operatorsBtn = document.querySelectorAll(".operator-button");
const allClearBtn = document.querySelector("#all-clear");
const clearEntryBtn = document.querySelector("#clear-entry");
