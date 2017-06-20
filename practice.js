document.addEventListener('DOMContentLoaded', function() {
  // your code goes below
console.log("hello world");
var guess = prompt("guess a number from 1 to 50");
console.log(guess);


while (guess != 23) {
  if (guess <30 && guess >20){
    alert("getting closer")
  } 
  guess = prompt ("guess again!")
}

alert("you are correct")

var numbers = 1;
while (numbers <= 10){
console.log(numbers);
numbers = numbers + 1}


});

