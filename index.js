var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}
//we add this next to override past
function yourAnimal() {
  var animal = 'cat';
  return animal;
}

const two = 2
function add2(n) {
  return n + two;

  // Feel free to move things around!
  // moved this to 15--> return n + two;
}

var funkyFunction = function() {
  return function() {
  return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction;
var theFunk = funkyFunction()()
