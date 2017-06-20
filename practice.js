document.addEventListener('DOMContentLoaded', function() {
  console.log("hello world!!!!!")
  var correctNum = Math.floor(Math.random() * 10) + 1  
  var name = prompt("what is your name") 
  var e = prompt("guess a number 1-10")
  while (e != correctNum){
    e = prompt("guess a number 1-10")
  }
  var d = prompt("would you like to use a calculator or a story  now " + name)
  if (d === "calculator") {
    var calculation = prompt("addition or subtraction or division or multiplication?")
    if (calculation == "addition"){
      var ad1 = Number(prompt("what is the first number you would like to add?" ))
      var ad2 = Number(prompt("what is the second number you would like to add?"))
      console.log(ad1 + ad2)
    }else if (calculation == "subtraction"){
      var sub1 = Number(prompt("what is the number you would like to subtract from?" ))
      var sub2 = Number(prompt("how much to take away?"))
      console.log(sub1 - sub2)
    }else if(calculation == "division"){
      var div1 = Number(prompt("what is the number you would like to divide?" ))
      var sdiv2 = Number(prompt("how much to divide it by?"))
      console.log(div1 / sdiv2)
    }else{
      var mult1 = Number(prompt("what is the number you would like to multiply?" ))
      var mult2 = Number(prompt("by what?"))
      console.log(div1 * div2)
    }
  }else{
    console.log("Two roads diverged in a yellow wood,And sorry I could not travel both And be one traveler, long I stoodAnd looked down one as far as I couldTo where it bent in the undergrowth;Then took the other, as just as fairAnd having perhaps the better claim,Because it was grassy and wanted wear;Because it was grassy and wanted wear;Though as for that the passing thereHad worn them really about the same,And both that morning equally layIn leaves no step had trodden black.Oh, I kept the first for another day!Yet knowing how way leads on to way,I doubted if I should ever come back.I shall be telling this with a sighSomewhere ages and ages hence:Two roads diverged in a wood, and I—I took the one less traveled by,And that has made all the difference.")
  }
  
  
  
})