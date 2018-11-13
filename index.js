var animala = 'dog'
var animalb = 'cat'

function myAnimal() {
  return animala
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animalb
}

function add2(n) {
const two = 2
  try{
  if(n == "") throw "not a number";
  if (isNaN(n)) throw 'not a number';
}
finally {
  return n + two
}
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
