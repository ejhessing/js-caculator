
//Varibles
var x, y,
    sign = 1,
    temp = '',
    equation = [],
    currentAnswer = null;


startCalculator();


function startCalculator () {
  var calculator = document.getElementById('calculator');

  //add event Listeners to all cells
  for (var i = 0; i<calculator.rows.length; i++) {
    for (var j = 0; j<calculator.rows[i].cells.length; j++) {
      calculator.rows[i].cells[j].addEventListener('click', capture);
    }
  }
}


function capture (evt) {
  var clicked = evt.target.innerHTML,
      symbol = /[+\-X%/]/;


  switch(clicked) {
    case "AC":
      reset();
      break;
    case "CE":
      temp = temp.substring(0,temp.length - 1);
      display(temp);
      break;
    case "=":
      addToEquation(temp * sign);
      calculate();
      break;
    case "+/-":
      sign *= -1;
      break;
    default:
    //if clicked is a symbol, then run addSymbol function or add number to temp
    if(symbol.test(clicked)){
       addSymbol(clicked);
    } else {
      temp += evt.target.innerHTML;
      display(temp);
    }
  }
}

//add the number in temp into array, the
function addSymbol (symbol) {
  addToEquation(temp * sign);
  addToEquation(symbol);
  temp = '';
  display(symbol);
}

//displays text
function display (text) {
  var display = document.getElementById('text');
  display.innerHTML = text;
}

//add to the equation array and change the sign back to positive
function addToEquation (item) {
  equation.push(item);
  sign = 1;
}

//Runs when the equal button is pressed
function calculate () {
  for (var i =0; i<equation.length; i++) {
    //if is a number then change x or y depending if they are already defined
    if (!isNaN(equation[i])) {
      if (x === null || x === undefined) {
        x = equation[i];
      } else if (currentAnswer !== null) {
        x = currentAnswer;
        y = equation[i];
      } else {
        y = equation[i];
      }
   }

   currentAnswer = runLogic(equation[i], Number(x), Number(equation[i+1]));

  }

  display(currentAnswer);
  equation = [currentAnswer];
}



//Calculates the logic behind the equations
function runLogic (symbol, x, y) {
  switch (symbol) {
    case "+":
      currentAnswer = x + y;
      break;
    case "-":
      currentAnswer = x - y;
      break;
    case "X":
      currentAnswer = x * y;
      break;
    case "/":
      currentAnswer = x / y;
      break;
    case "%":
      currentAnswer = x % y;
      break;
  }
  return currentAnswer;
}



//when AC button pressed, reset everything
function reset () {
  equation = [];
  temp = '';
  x = null;
  y = null;
  display("");
  currentAnswer = null;
}




