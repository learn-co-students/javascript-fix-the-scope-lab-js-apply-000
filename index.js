var animal = 'dog'
var youranimal = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal
}

function add2(n) {
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()();
