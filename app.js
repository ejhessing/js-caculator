// Need to get all the html elements
// Create a currentEquation and currentTotal that will display
// As buttons pushed, it will add to the current equation
// The display can only show so many numbers
// Current Equation could be an array that keeps track of everything pushed

//Varibles
var equation = [];
var x, y;
var currentAnswer;
var temp = '';
var currentOperator ;

startCalculator();


function startCalculator () {

  var calculator = document.getElementById('calculator');

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
      x = null;
      y = null;
      break;
    case "CE":
      temp = '';
      break;
    case "=":
      push(temp);
      calculate();
      temp ='';
      break;
    case "+":
      push(temp);
      currentOperator = "+";
      temp = '';
      break;
    case "-":
      push(temp);
      currentOperator = "-";
      temp = '';
      break;
    case "X":
      push(temp);
      currentOperator = "X";
      temp = '';
      break;
    case "/":
      push(temp);
      currentOperator = "/";
      temp = '';
      break;
    case "%":
      push(temp);
      currentOperator = "%";
      temp = '';
      break;
    case "+/-":
      temp *= -1;
      display(temp);
      break;
    default :
      temp += evt.target.innerHTML;
      display(temp);
  }

  showEquation();
}



function display (text) {
  var display = document.getElementById('text');

  display.innerHTML= text;
}


function push (num) {
  if(x === null || x === undefined) {
    x = num;
    console.log("x " + x);
  } else {
    y = num;
    console.log("y " + y)
  }
}


function calculate () {

 switch (currentOperator) {
    case "+":
      currentAnswer = Number(x) + Number(y);
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
    default :
      console.log("deafult on calculate");
  }

display(currentAnswer);

}