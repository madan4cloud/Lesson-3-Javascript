document.addEventListener('DOMContentLoaded', function() {
  // your code goes below
  console.log("The page has loaded!");
  var givenNumber = prompt("Give me a number");
  console.log(givenNumber);
  if(givenNumber < 4){
    console.log("This number is less than four");
  }else{
    console.log("this number is NOT less than four!");
  }
})