let display = document.getElementById('display');
let currentInput = '';
let resultShown = false;

function append(value) {
  if (resultShown && !isOperator(value)) {
    currentInput = '';
    resultShown = false;
  }

  currentInput += value;
  display.innerText = currentInput;
}

function isOperator(char) {
  return ['+', '-', '*', '/', '%'].includes(char);
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
    resultShown = true;
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
}
