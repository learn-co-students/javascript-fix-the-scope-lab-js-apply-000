var animal = ['dog', 'cat']

function myAnimal() {
  return animal[0]
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal[1]
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

var theFunk = funkyFunction()()
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
