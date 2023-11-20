const textField = document.querySelector("#text-field");
let currentNumber = "";
const numbersArray = [];
const operationsArray = [];
let finalResult = 0;

function minus() {
  operationsArray.push("-");
  numbersArray.push(currentNumber);
  currentNumber = "";
}

function add() {
  operationsArray.push("+");
  numbersArray.push(currentNumber);
  currentNumber = "";
}

// 1 + 2 + 3

function calculate() {
  numbersArray.push(currentNumber);
  finalResult = parseInt(numbersArray[0]);
  let i = 1;
  for (const operation of operationsArray) {
    switch (operation) {
      case "+":
        finalResult += parseInt(numbersArray[i]);
        i++;
        break;

      case "-":
        finalResult -= parseInt(numbersArray[i]);
        i++;
        break;

      default:
        break;
    }
  }
  console.log(finalResult);
}

// Numpad //
function number(number) {
  currentNumber += number.toString();
}
