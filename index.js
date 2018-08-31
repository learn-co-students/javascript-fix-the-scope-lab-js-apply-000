var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat' // Output is 'cat'.  var animal = dog is global scope.
  // var animal = 'cat' in the function is the local scope and overrides global.
  // I just want to say that I got this right early and forgot to command + S.  Thus the next many hours.
  return animal
}

// Output needs to be 415.  Moved const two into the scope (before return) and declared n = 413 as a parameter
function add2(n = 413) {
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
// Output needs to be FUNKY. funkyFunction returns a function that has no name.
// By calling the () a second time (the inner function of funkyFunction) I am
// calling the function that funkyFunction returned which returns "FUNKY"
var theFunk = funkyFunction()() // added ()()
