var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = "cat"
  //using the let key word to change the value of var animal from dog to cat
  return animal
}

function add2(n) {
  // the var two need to be defined before using it
  const two = 2

  return n + two

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
