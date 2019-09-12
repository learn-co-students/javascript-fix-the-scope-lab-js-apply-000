var animal = 'dog'

function myAnimal() {
  var animal = 'dog';
  return animal;
}

myAnimal();

function yourAnimal() {
  var animal = 'cat'
  return animal
}

yourAnimal();

function add2(n) {
  const two = 2
  return n + two
}

add2(115);

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = funkyFunction()()



