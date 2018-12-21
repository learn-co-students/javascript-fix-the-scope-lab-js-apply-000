var animal = 'dog'

function myAnimal() {
  return animal
}

// fix yourAnimal to return "cat" 
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

// add 2 to argument n
function add2(n) {
  
  const two = 2
  //return n + two
  return parseInt(n, 10) + two

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()
theFunk = theFunk()