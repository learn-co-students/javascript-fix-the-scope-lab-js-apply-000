var myAnimalVar = 'dog'
var yourAnimalVar = 'cat'

function myAnimal() {
  return myAnimalVar
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAnimalVar
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()()
// Wait so what is this nonsense? funkyFunction is a function so running it should run function () on its own and then return the funky.
// GDI why are these computers so human
