var animal1 = 'dog'
var animal2 = 'cat'

function myAnimal() {
  return animal1
}

function yourAnimal() {
  return animal2
}

function add2(n) {
  const two = 2
  return n + two
}
var funkyFunction = function() {
  return function(){
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = "FUNKY!"
