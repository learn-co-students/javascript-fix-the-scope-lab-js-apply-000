var animal = ['dog', 'cat']

function myAnimal() {
  return animal[0]
}

function yourAnimal() {
  return animal[1]
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
