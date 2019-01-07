var Animal = 'dog'
var worseAnimal = 'cat'

function myAnimal() {
  return Animal
}

function yourAnimal() {
  return worseAnimal
}

function add2(n) {
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
