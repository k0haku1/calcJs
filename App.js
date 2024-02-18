const resultElement = document.getElementById('result');
const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const submitPlus = document.getElementById('plus');
const submitMinus = document.getElementById('minus');
const submitMultiply = document.getElementById('multiply');
const submitDivide = document.getElementById('divide');
const submitResult = document.getElementById('submit');

submitPlus.onclick = function() {
  action = '+'
}

submitMinus.onclick = function() {
  action = '-'
}

submitMultiply.onclick = function() {
  action = '*'
}

submitDivide.onclick = function () {
  action = '/'
}

function printRes (result) {
  if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}

  resultElement.textContent = result;
}

function calcNumbers(number1, number2, actionSymbol) {
  const n1 = Number(number1.value)
  const n2 = Number(number2.value)

  switch (actionSymbol) {
    case '+' :
      return n1 + n2
    case '-' :
      return n1 - n2
    case '*' :
      return n1 * n2
    case '/' :
      return n1 / n2         
  }
}

submitResult.onclick = function() {
  const result = calcNumbers(num1, num2, action)
  printRes(result)
}