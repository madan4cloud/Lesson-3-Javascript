document.addEventListener('DOMContentLoaded', function Cactus() {
  // your code goes below
$('#cac').on('click', function() {
var answer = prompt ("Would you like too multiply, divide, subtract, add, square, cube, or squareRoot?");
if (answer == "add") {
var guess2 = Number(prompt('Give me the first number'));
var guess1 = Number(prompt('Give me the second number'));
alert (guess2 + guess1)
} 

else if (answer == "subtract") {
var guess20 = Number(prompt('Give me the first number'));
var guess10= Number(prompt('Give me the second number'));
alert (guess20 - guess10)
} 

else if (answer == "divide") {
var guess22 = Number(prompt('Give me the first number'));
var guess11 = Number(prompt('Give me the second number'));
alert (guess22 / guess11)
} 

else if (answer == "multiply") {
var guess40 = Number(prompt('Give me the first number'));
var guess30 = Number(prompt('Give me the second number'));
alert (guess40 * guess30)
} else if (answer == "square") {
var guess6 = Number(prompt('Give me the number you want to square'));
alert (guess6 * guess6)
}
else if (answer == "cube") {
var guess7 = Number(prompt('Give me the number you want me to cube'));
alert (guess7 * guess7 * guess7)
}
else if (answer == "squareRoot") {
var guess9 = Number(prompt('Give me the number you want to square root'));
alert(Math.sqrt(guess9));
}
});
});