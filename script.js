let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => (b === 0 ? "Undefined" : a / b);

let firstInput = "";
let operator = "";
let currentInput = "0";
let theFlag = false;

let operate = (op, n1, n2) => {
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
};

const calculatorDisplay = document.querySelector("#calculator-display");
const numbersBtn = document.querySelectorAll(".number-button");
const operatorsBtn = document.querySelectorAll(".operator-button");
const allClearBtn = document.querySelector("#all-clear");
const clearEntryBtn = document.querySelector("#clear-entry");
const equalBtn = document.querySelector("#equal");

let updateDisplay = () => {
  calculatorDisplay.textContent = currentInput;
};

numbersBtn.forEach((numberBtn) => {
  let numberValue = numberBtn.textContent;
  numberBtn.addEventListener("click", () => {
    addNumber(numberValue);
  });
});

let addNumber = (numberValue) => {
  if (numberValue === "." && currentInput.includes(".")) return;
  if (theFlag) {
    currentInput = numberValue;
    theFlag = false;
  } else if (currentInput === "0") {
    currentInput = numberValue;
  } else {
    currentInput += numberValue;
  }
  updateDisplay();
};

operatorsBtn.forEach((operatorBtn) => {
  let operatorValue = operatorBtn.textContent;
  operatorBtn.addEventListener("click", () => {
    addOperator(operatorValue);
  });
});

let addOperator = (operatorValue) => {
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
};

equalBtn.addEventListener("click", () => {
  equal();
});

let equal = () => {
  if (firstInput !== "" && operator !== "" && currentInput !== "") {
    const result = operate(operator, firstInput, currentInput);
    currentInput = result.toString();
    firstInput = "";
    operator = "";
    theFlag = true;
    updateDisplay();
  }
};

allClearBtn.addEventListener("click", () => {
  allClear();
});

let allClear = () => {
  firstInput = "";
  operator = "";
  currentInput = "0";
  theFlag = false;
  updateDisplay();
};

clearEntryBtn.addEventListener("click", () => {
  clearEntry();
});

let clearEntry = () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
};

document.addEventListener("keyup", keyPress);

function keyPress(event) {
  const key = event.key;
  event.preventDefault();
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      addNumber(key);
      break;

    case "/":
      addOperator("÷");
      break;
    case "*":
    case "-":
    case "+":
      addOperator(key);
      break;

    case "Enter":
      equal();
      break;

    case "Escape":
      allClear();
      break;

    case "Backspace":
      clearEntry();
      break;

    default:
      return;
  }
}
