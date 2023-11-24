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
        console.log("error");

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
  console.log("Before calculation " + currentEquation);

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
