var animal = 'dog'
 
function myAnimal() {
  return animal
}
 
function yourAnimal() {
  var animal = 'cat' // add cat variable
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2; // moved from line 20 to 16. Need to define earlier
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
var theFunk = funkyFunction
theFunk = theFunk()()