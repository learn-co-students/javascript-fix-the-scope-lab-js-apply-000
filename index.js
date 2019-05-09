var animal = 'dog'
var cat = 'cat'
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return cat
}

function add2(n) {
  return n + 2
}

var theFunk = funkyFunction()()

function funkyFunction() {
  return function theFunk(){
    return 'FUNKY!'
  }
}

