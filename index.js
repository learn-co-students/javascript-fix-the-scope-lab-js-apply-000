var animal = 'dog'
const two = 2

function myAnimal() {
  return animal
}

function yourAnimal() {
  if (animal === 'cat') {
    return animal
  }

  else {
    var animal = 'cat'
    return animal
  }
}

function add2(n) {
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()
