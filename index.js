var animal1 = 'dog'

function myAnimal() {
  return animal1
}

var animal2 = "cat"

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal2
}

const two = 2

function add2(n) {
  return n + two

  // Feel free to move things around!

}


function funkyFunction() {
  return function wordFunky() {
    return "FUNKY!"}
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
