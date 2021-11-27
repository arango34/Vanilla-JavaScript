if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

var answer;

function ready() {
  let inputButtons = document.getElementsByClassName('btn-input');
  for (let i = 0; i < inputButtons.length; i++) {
    let button = inputButtons[i];
    button.addEventListener('click', getInput);
  }
}

function getInput(event) {
  let button = event.target;
  let buttonSelected = button.innerText;
  doSomething(buttonSelected);
}

function doSomething(value) {
  let inputCont = document.getElementsByClassName('input-value')[0];
  let lastChar = inputCont.innerText.charAt(inputCont.innerText.length - 1);
  let inputString = inputCont.innerText.toString();
  let char = inputCont.innerText.charAt(inputCont.innerText.length - 2);

  switch (value) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      parseFloat(value);

      if (char == ' ' && lastChar == '0') {
        inputCont.innerText = inputString.substring(0, inputString.length - 1);
        inputCont.append(value);
      } else if (
        inputCont.innerText.charAt(inputCont.innerText.length - 1 == ' ')
      ) {
        inputCont = inputCont;
        inputCont.append(value);
      } else if (
        inputCont.innerText == 0 ||
        inputCont.innerText == answer ||
        inputCont.innerText == 'undefined' ||
        answer == value
      ) {
        clearInput();
        inputCont.append(value);
      } else {
        inputCont.append(value);
      }

      break;
    case '0':
      parseFloat(value);

      if (
        inputCont.innerText == 0 ||
        inputCont.innerText == answer ||
        inputCont.innerText == 'undefined'
      ) {
        clearInput();
        inputCont.append(value);
      } else if (char == ' ' && lastChar == '0') {
        inputCont = inputCont;
      } else {
        inputCont.append(value);
      }

      break;
    case 'AC':
      inputCont.innerText = 0;

      break;
    case '+':
    case '-':
    case '\u00f7':
    case 'x':
      if (inputCont.innerText == 0) {
        inputCont = inputCont;
      } else if (!isNaN(lastChar)) {
        inputCont.append(' ' + value + ' ');
      } else if (value == lastChar) {
        inputCont = inputCont;
      } else {
        inputCont.innerText = inputString.substring(0, inputString.length - 1);
        inputCont.append(' ' + value + ' ');
      }

      break;
    case '=':
      renderAnswer();

      break;
    default:
      alert('Invalid Input');

      break;
  }
}

function renderAnswer() {
  let inputCont = document.getElementsByClassName('input-value')[0];
  let lastChar = inputCont.innerText.charAt(inputCont.innerText.length - 1);
  let char = inputCont.innerText.charAt(inputCont.innerText.length - 2);

  if (inputCont.innerText == answer) {
    inputCont = inputCont;
  } else if (
    (char == ' ' && lastChar == '+') ||
    (char == ' ' && lastChar == '-') ||
    (char == ' ' && lastChar == 'x') ||
    (char == ' ' && lastChar == '\u00f7')
  ) {
    alert(`     SyntaxError:
      "Value missing after "${lastChar}" operator"`);
  } else if (inputCont.innerText.indexOf('\u00f7 0') != -1) {
    inputCont.innerText = 'undefined';
  } else if (
    inputCont.innerText.indexOf('x') &&
    inputCont.innerText.indexOf('\u00f7') != -1
  ) {
    inputCont.innerText = inputCont.innerText.replace(/x/g, '*');
    inputCont.innerText = inputCont.innerText.replace(/\u00f7/g, '/');
    answer = eval(inputCont.innerText);
    answer = answer.toLocaleString();
    inputCont.innerText = answer;
  } else if (inputCont.innerText.indexOf('x') != -1) {
    inputCont.innerText = inputCont.innerText.replace(/x/g, '*');
    answer = eval(inputCont.innerText);
    answer = answer.toLocaleString();
    inputCont.innerText = answer;
  } else if (inputCont.innerText.indexOf('\u00f7') != -1) {
    inputCont.innerText = inputCont.innerText.replace(/\u00f7/g, '/');
    answer = eval(inputCont.innerText);
    answer = answer.toLocaleString();
    inputCont.innerText = answer;
  } else {
    answer = eval(inputCont.innerText);
    answer = answer.toLocaleString();
    inputCont.innerText = answer;
  }
}

function clearInput() {
  let inputContent = document.getElementsByClassName('input-value')[0];
  inputContent.innerHTML = '';
  answer = '';
}
