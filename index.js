var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  return animal
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

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()
theFunk = theFunk()
