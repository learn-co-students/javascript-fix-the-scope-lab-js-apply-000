var animal = 'dog'

function myAnimal() {
  return animal
  
}

function yourAnimal() {
  var animal = "cat" // local variable overrides the global variable
  return animal
}
const two = 2 // Looking at the index-test, the constant was supposed to be in the "global scope" which is anything outside a function 
function add2(n) { 
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()() //the first set of parenthesis invokes the first function and then the second set of parenthesis invokes the second function (diggin)--- setting the variable "theFunk" to the RETURN value of the funkyFunction -- step by step no jumping

