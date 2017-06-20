document.addEventListener('DOMContentLoaded', function() {
  // your code goes below
  console.log("Hello World")

var name = prompt("What is your name?")

var givenNumber = prompt(name + " give me a number")

while (givenNumber != 5) {
givenNumber = prompt("Wrong! Guess Again");
}
if (Number(givenNumber)  == 5) {
alert("you are correct")
}
console.log(givenNumber)


var one = 1;

while (one < 11) {
console.log (one)
one = one + 1;
}

var calculation = prompt("Would you like addition or subtraction or multiplication or division")

if (calculation == "addition") {
 var add1 = Number(prompt("What is the first number you woud like to add"))
 var add2 = Number(prompt("What is the second number yoyu would like to add"))
console.log(add1 + add2)
}
else if (calculation == "subtraction") {
 var sub1 = Number(prompt("What is the first number you woud like to subtract"))
 var sub2 = Number(prompt("What is the second number yoyu would like to subtract"))
console.log(sub1 - sub2)
}
else if (calculation == "mutiplication") {
 var mult1 = Number(prompt("What is the first number you woud like to multiply"))
 var mult2 = Number(prompt("What is the second number yoyu would like to multiply"))
console.log(mult1 * mult2)
}
else if (calculation == "division") {
 var div1 = Number(prompt("What is the first number you woud like to divide"))
 var div2 = Number(prompt("What is the second number yoyu would like to divide"))
console.log(div1 / div2)
}






}) 

