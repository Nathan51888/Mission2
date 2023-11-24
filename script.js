const textField = document.querySelector("#text-field");

const currentEquation = [];
let currentNumber = "";
let finalResult = 0;

function number(number) {
  currentNumber += number.toString();
  textField.textContent += number;
}

function add() {
  if (!currentNumber) {
    switch (currentEquation[currentEquation.length - 1]) {
      case "+":
        console.log("repeated operator");
        return;
      case "-":
        currentEquation[currentEquation.length - 1] = "+";
        textField.textContent = ":" + currentEquation.join("");
        return;
    }
  }
  currentEquation.push(currentNumber);
  currentEquation.push("+");
  currentNumber = "";
  textField.textContent += "+";
}

function minus() {
  if (!currentNumber) {
    switch (currentEquation[currentEquation.length - 1]) {
      case "-":
        console.log("repeated operator");
        return;
      case "+":
        currentEquation[currentEquation.length - 1] = "-";
        textField.textContent = ":" + currentEquation.join("");
        return;
    }
  }
  currentEquation.push(currentNumber);
  currentEquation.push("-");
  currentNumber = "";
  textField.textContent += "-";
}

function calculate() {
  currentEquation.push(currentNumber);

  finalResult = parseInt(currentEquation[0]);
  console.log(currentEquation);

  currentEquation.forEach((item, index) => {
    switch (item) {
      case "+":
        if (!currentEquation[index + 1]) return;
        finalResult += parseInt(currentEquation[index + 1]);
        break;

      case "-":
        if (!currentEquation[index + 1]) return;
        finalResult -= parseInt(currentEquation[index + 1]);
        break;
    }
  });
  console.log("Final result: " + finalResult);
  textField.textContent = `=${finalResult}`;
}

function backspace() {
  if (!currentNumber && currentEquation.length > 1) {
    currentEquation.pop();
    currentNumber = currentEquation[currentEquation.length - 1];
    textField.textContent = ":" + currentEquation.join("");
    currentEquation.pop();
    console.log("deleted an operator");
    console.log(currentEquation);
    return;
  }

  currentNumber = currentNumber.slice(0, -1);
  textField.textContent = ":" + currentEquation.join("") + currentNumber;

  console.log("deleted a number");
  console.log(currentEquation);
}
