var myanimal = 'dog'

function myAnimal(myanimal) {
  myanimal = 'dog'
  return myanimal
}

var youranimal = 'cat'
function yourAnimal(youranimal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  youranimal = 'cat'
  return youranimal
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
