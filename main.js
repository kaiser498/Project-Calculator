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

let operatorSymbol = "";
let num1 = 0;
let num2 = 0;

function operate(operatorSymbol, num1, num2) {
  switch (operatorSymbol) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}

const calculatorDisplay = document.querySelector("#calculatorDisplay");
const buttons = document.querySelectorAll("button");
const buttonsArr = Array.from(buttons);
buttonsArr.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value)) {
      if (calculatorDisplay.value === "0") {
        calculatorDisplay.value = "";
      } else {
        calculatorDisplay.value += value;
        return;
      }
    }
    if (value === "AC") {
      calculatorDisplay.value = "";
      return;
    }
  });
});
