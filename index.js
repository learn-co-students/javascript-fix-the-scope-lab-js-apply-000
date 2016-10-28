var animal = 'dog'
var animal2 = 'cat'
function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal2
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function(){return "FUNKY!"}

/*var funkyFunction = function()
function funkyFunction() {
    return "FUNKY!"
}*/
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()
