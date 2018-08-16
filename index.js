
var animal;

function myAnimal(animal) {
  animal = 'dog';
  return animal
}

function yourAnimal(animal) {
  animal = 'cat';
  return animal
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction();
theFunk = theFunk();
