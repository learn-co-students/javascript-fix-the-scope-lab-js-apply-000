var myAnimal = 'dog'

function myAnimal('dog') {
  return myAnimal
}

var yourAnimal = 'cat'
function yourAnimal('cat') {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAnimal
}

var n = '04'
function add2(n) {
  return two + n

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction
function funkyFunction(theFunk) {
  return ("FUNKY!")
}
