

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal(animal) {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2
  return n + two
}
add2(360);


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()();

theFunk;
