var animals = {myAnimal:'dog',yourAnimal:'cat'}

function myAnimal() {
  return animals.myAnimal
}

function yourAnimal() {
  return animals.yourAnimal
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
