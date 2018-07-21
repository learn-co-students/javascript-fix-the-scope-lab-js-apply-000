var animal = 'dog'
var yranimal = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yranimal
}

function add2(n) {
  const two = 2
  return n + two
}

function funkyFunction() {
  return funkyFunction
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!";
