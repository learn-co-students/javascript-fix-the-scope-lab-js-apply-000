var animalMy = 'dog'
var animalYour = 'cat'

function myAnimal() {
  return animalMy
}

function yourAnimal() {
  return animalYour
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

var theFunk = funkyFunction()
theFunk=theFunk()