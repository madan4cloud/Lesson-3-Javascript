document.addEventListener('DOMContentLoaded', function() {
  console.log("the page has loaded!");
  var givenNumber = prompt("Give me a number!");
  console.log("Your number is " + givenNumber);
  if(givenNumber < 4){
    console.log("This number is less than four")
    }else{
      console.log("This number is more than four!")
  }
})