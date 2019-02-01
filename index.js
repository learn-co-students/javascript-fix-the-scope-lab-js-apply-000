function myAnimal() {
   return "dog";
   }

function yourAnimal() {
  var yourNewAnimal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourNewAnimal;
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
// NOTE: you only need to modify the code below this line
var preFunk = funkyFunction()
var theFunk = preFunk()

