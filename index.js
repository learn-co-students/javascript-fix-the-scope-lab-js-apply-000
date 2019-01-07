var animal = ["dog", "cat"];

function myAnimal() {
  return animal[0]
}

function yourAnimal() {
  return animal[1]
}

function add2(n) {
  return n + 2
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();
