
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


  switch (evt.target.innerHTML) {
    case "AC":
      reset();
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
      push("+");
      temp = '';
      display("+");
      break;
    case "-":
      push(temp * sign);
      push("-");
      temp = '';
      display("-");
      break;
    case "X":
      push(temp * sign);
      push("X");
      temp = '';
      display("X");
      break;
    case "/":
      push(temp * sign);
      push("/");
      temp = '';
      display("/");
      break;
    case "%":
      push(temp * sign);
      push("%");
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

function reset () {
      equation = [];
      temp = '';
      x = null;
      y = null;
      display("");
      currentAnswer = null;
}