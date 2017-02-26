var animal = "cat";

function myAnimal(newAnimal) {
  return newAnimal = "dog";
}

function yourAnimal() {
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()
