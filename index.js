var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  if (myAnimal() === "dog") {
    return "cat"
  }
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
}

function add2(n) {
  return n + 2

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function () {
    return theFunk;
  }
}



// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = "FUNKY!"
