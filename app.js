
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
  var clicked = evt.target.innerHTML;
  var symbol = /[+\-X%/]/

  if(clicked === "AC"){
    reset();
  } else if(clicked === "CE"){
    temp = temp.substring(0,temp.length - 1);
    display(temp);
  } else if(clicked === "=") {
    addToEquation(temp * sign);
    calculate();
  } else if(clicked === "+/-"){
      sign *= -1;
  } else if(symbol.test(clicked)){
      addToEquation(temp * sign);
      addToEquation(clicked);
      temp = '';
      display(clicked);
  } else {
    temp += evt.target.innerHTML;
    display(temp);
  }

}



function display (text) {
  var display = document.getElementById('text');
  display.innerHTML = text;
}


function addToEquation (item) {
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

   currentAnswer = runLogic(equation[i], Number(x), Number(equation[i+1]));

    // switch (equation[i]) {
    //   case "+":
    //     currentAnswer = Number(x) + Number(equation[i+1]);
    //     break;
    //   case "-":
    //     currentAnswer = Number(x) - Number(equation[i+1]);
    //     break;
    //   case "X":
    //     currentAnswer = Number(x) * Number(equation[i+1]);
    //     break;
    //   case "/":
    //     currentAnswer = Number(x) / Number(equation[i+1]);
    //     break;
    //   case "%":
    //     currentAnswer = Number(x) % Number(equation[i+1]);
    //     break;
    // }

  }
  console.log(currentAnswer)
  display(currentAnswer);
  equation = ["currentAnswer"];
}

function reset() {
      equation = [];
      temp = '';
      x = null;
      y = null;
      display("");
      currentAnswer = null;
}


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











// function capture (evt) {


//   switch (evt.target.innerHTML) {
//     case "AC":
//       reset();
//       break;
//     case "CE":
//       temp = temp.substring(0,temp.length - 1);
//       display(temp);
//       break;
//     case "=":
//       addToEquation(temp * sign);
//       calculate();
//       break;
//     case "+":
//       addToEquation(temp * sign);
//       addToEquation("+");
//       temp = '';
//       display("+");
//       break;
//     case "-":
//       addToEquation(temp * sign);
//       addToEquation("-");
//       temp = '';
//       display("-");
//       break;
//     case "X":
//       addToEquation(temp * sign);
//       addToEquation("X");
//       temp = '';
//       display("X");
//       break;
//     case "/":
//       addToEquation(temp * sign);
//       addToEquation("/");
//       temp = '';
//       display("/");
//       break;
//     case "%":
//       addToEquation(temp * sign);
//       addToEquation("%");
//       temp = '';
//       display("%");
//       break;
//     case "+/-":
//       sign *= -1;
//       break;
//     default :
//       temp += evt.target.innerHTML;
//       display(temp);
//   }

// }