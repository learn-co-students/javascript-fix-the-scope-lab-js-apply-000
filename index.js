var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  return animal
}

// Moved myAnimal test under yourAnimal test to check if global animal was
// redefined (assuming tests run in order).

function add2(n) {
  const two = 2
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
var theFunk = funkyFunction()()

// Calls funkyFunction with the first (), which returns a function, then
// calls that function with the second ()
