var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var newAnimal = 'cat'
  return newAnimal
}

function add2(n) {
  return n + 2

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
