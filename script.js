let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => (b === 0 ? "Undefined" : a / b);

let firstInput = "";
let operator = "";
let currentInput = "0";
let theFlag = false;

function operate(op, n1, n2) {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  switch (op) {
    case "+":
      return add(n1, n2);
      break;
    case "-":
      return subtract(n1, n2);
      break;
    case "*":
      return multiply(n1, n2);
      break;
    case "÷":
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
const equalBtn = document.querySelector("#equal");

const updateDisplay = () => {
  calculatorDisplay.value = currentInput;
};

numbersBtn.forEach((numberBtn) => {
  let numberValue = numberBtn.textContent;
  numberBtn.addEventListener("click", () => {
    if (theFlag) {
      currentInput = numberValue;
      theFlag = false;
    } else if (currentInput === "0") {
      currentInput = numberValue;
    } else {
      currentInput += numberValue;
    }
    updateDisplay();
  });
});

operatorsBtn.forEach((operatorBtn) => {
  let operatorValue = operatorBtn.textContent;
  operatorBtn.addEventListener("click", () => {
    if (firstInput === "" && currentInput !== "") {
      firstInput = currentInput;
      operator = operatorValue;
      theFlag = true;
    } else if (firstInput !== "" && currentInput !== "0") {
      const result = operate(operator, firstInput, currentInput);
      currentInput = result.toString();
      firstInput = result;
      operator = operatorValue;
      theFlag = true;
      updateDisplay();
    }
  });
});

equalBtn.addEventListener("click", () => {
  let equalBtnValue = equalBtn.textContent;
  if (firstInput !== "" && operator !== "" && currentInput !== "") {
    const result = operate(operator, firstInput, currentInput);
    currentInput = result.toString();
    firstInput = "";
    operator = "";
    theFlag = true;
    updateDisplay();
  }
});
