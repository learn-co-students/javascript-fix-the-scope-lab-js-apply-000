var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal = 'cat'  
  return animal
}
// Declaring a variable inside the function does not affect the    animal variable in the global scope.

function add2(n) {
  const two = 2
  return n + two
// Moved the 'two' variable higher than the return line so it runs first.
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
// funkyFunction() gives access to the inner function, so you need to call it one more time with () to access 'Funky!'


