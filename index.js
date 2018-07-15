var animal = 'dog'

function myAnimal() {
  return animal
}

var animal2 = 'cat'

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal2
}

function add2(n) {
  // Feel free to move things around!
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

//Added the 1st parenthesis to execute the outside function a.k.a funkyFunction. Added the 2nd parenthesis next to "funkyFunction()" since it's essentially the name of the inside function that we want to execute.