// Need to get all the html elements
// Create a currentEquation and currentTotal that will display
// As buttons pushed, it will add to the current equation
// The display can only show so many numbers
// Current Equation could be an array that keeps track of everything pushed

//Varibles
var equation = [];
var currentAnswers ;
var temp = '';
var currentOperator ;

startCalculator();


function startCalculator () {

  var calculator = document.getElementById('calculator');



  // console.log(calculator.rows[0]);
  // console.log(calculator.rows[0].cells[0].innerHTML)

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
      break;
    case "CE":
      equation.pop();
      break;
    case "=":
      equation.push(temp);
      calculate();
      break;
    case "+":
      equation.push(temp);
      currentOperator = +;
      //equation.push(evt.target.innerHTML);
      temp = '';
      break;
    case "-":
      equation.push(temp);
      currentOperator = -;
      //equation.push(evt.target.innerHTML);
      temp = '';
      break;
    case "X":
      equation.push(temp);
      currentOperator = *;
      //equation.push(evt.target.innerHTML);
      temp = '';
      break;
    case "/":
      equation.push(temp);
      currentOperator = \/;
      //equation.push(evt.target.innerHTML);
      temp = '';
      break;
    case "%":
      equation.push(temp);
      currentOperator = %;
      //equation.push(evt.target.innerHTML);
      temp = '';
      break;
    case "+/-":
      temp *= -1;
      break;
    default :
      temp += parseInt(evt.target.innerHTML);
  }

  showEquation();
}



function showEquation () {
  var display = document.getElementById('text');

  display.innerHTML= equation.join("");
}





function calculate () {

var answer = equation.reduce(function(a,b){
  return a+b;
},'');

console.log(answer);

//need to go through array and put numbers together to form larger numbers before running the operators

// var equationArray = [];
// for (var j = 0; j < equation.length; j++) {
//   while(typeof equation[j+1] === )
// }



//   for (var i = 0; i < equation.length; i++) {
//       switch (equation[i]) {
//     case "+":
//       equation = [];
//       break;
//     case "CE":
//       equation.pop();
//       break;
//     case "=":
//       calculate();
//       break;
//     default :
//       equation.push(evt.target.innerHTML);
//   }
//   }
}