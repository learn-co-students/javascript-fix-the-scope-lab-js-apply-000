var animal = 'dog'

function myAnimal() {
  return animal
}

var animalCat = 'cat'

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animalCat
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
  // Bc two needs to equal 2 before the return will work
  // "Child scopes have access to parent scopes?"
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction () ()

//function "funkyFunction" () {
//  return "FUNKY!"
//}
