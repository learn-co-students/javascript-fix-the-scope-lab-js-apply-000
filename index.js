var animal1 = 'dog'
var animal2 = 'cat'

function myAnimal() {
  return animal1
}

function yourAnimal() {
  return animal2
}

function add2(n) {
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()();
