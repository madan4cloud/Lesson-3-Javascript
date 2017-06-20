document.addEventListener('DOMContentLoaded', function Cactus() {
  // your code goes below

var answer = prompt ("What Would you like to caculate?");
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
}
})