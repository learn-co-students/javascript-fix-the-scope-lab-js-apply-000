var animal = 'dog'
myAnimal();

function myAnimal() {
  return animal
}


var animalY = 'cat'

yourAnimal();

function yourAnimal() {
  return animalY
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

var theFunk = funkyFunction()();
