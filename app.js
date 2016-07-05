// Need to get all the html elements
// Create a currentEquation and currentTotal that will display
// As buttons pushed, it will add to the current equation
// The display can only show so many numbers
// Current Equation could be an array that keeps track of everything pushed

//Varibles
var equation = [];
var x, y;
var currentAnswer = null;
var temp = '';
var currentOperator ;
var sign = 1;

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
  // Check if clear (CE) or all clear (AC)
  // if ac clear the array
  // else if ce, clear last entry into array
  // else if equals then do the equation
  // or add into array

  switch (evt.target.innerHTML) {
    case "AC":
    equation = [];
      temp = '';
      x = null;
      y = null;
      display("");
      currentAnswer = null;
      break;
    case "CE":
      temp = temp.substring(0,temp.length - 1);
      display(temp);
      break;
    case "=":
      push(temp * sign);
      calculate();
      break;
    case "+":
      push(temp * sign);
      currentOperator = "+";
      push(currentOperator);
      temp = '';
      display("+");
      break;
    case "-":
      push(temp * sign);
      currentOperator = "-";
      push(currentOperator);
      temp = '';
      display("-");
      break;
    case "X":
      push(temp * sign);
      currentOperator = "X";
      push(currentOperator);
      temp = '';
      display("X");
      break;
    case "/":
      push(temp * sign);
      currentOperator = "/";
      push(currentOperator);
      temp = '';
      display("/");
      break;
    case "%":
      push(temp * sign);
      currentOperator = "%";
      push(currentOperator);
      temp = '';
      display("%");
      break;
    case "+/-":
      sign *= -1;
      break;
    default :
      temp += evt.target.innerHTML;
      display(temp);
  }

}



function display (text) {
  var display = document.getElementById('text');
  display.innerHTML = text;
}


function push (item) {
  equation.push(item);
  sign = 1;

  // if(x === null || x === undefined) {
  //   x = num;
  // } else if(currentAnswer !== null) {
  //   x = currentAnswer;
  //   y = num;
  // } else {
  //   y = num;
  // }
}


function calculate () {
  for(var i =0; i<equation.length; i++) {
    if(!isNaN(equation[i])) {
      if(x === null || x === undefined) {
        x = equation[i];
      } else if(currentAnswer !== null) {
        x = currentAnswer;
        y = equation[i];
      } else {
         y = equation[i];
       }
   }

    switch (equation[i]) {
      case "+":
        currentAnswer = Number(x) + Number(equation[i+1]);
        break;
      case "-":
        currentAnswer = Number(x) - Number(equation[i+1]);
        break;
      case "X":
        currentAnswer = Number(x) * Number(equation[i+1]);
        break;
      case "/":
        currentAnswer = Number(x) / Number(equation[i+1]);
        break;
      case "%":
        currentAnswer = Number(x) % Number(equation[i+1]);
        break;
    }

  }
  display(currentAnswer);
  equation = ["currentAnswer"];
}