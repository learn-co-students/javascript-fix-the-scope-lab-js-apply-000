var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = "cat" // has local scope in the block
  return animal
}

function add2(n) {
  const two = 2  // code reads from top to bottom, so had to make sure two = 2 was defined before it was called to be used
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()() // the double parens invoke the two functions
thefunk() // called the funkyfunction()()
