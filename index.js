var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  // establish local variable for animal within object so that it is not global and does not break the previous function myAnimal
  var animal = 'cat';
  return animal
}




function add2(n) {
  // for function add2(n) define constant two to be number 2 before calling the function because const will not hoist variable to top
  // call function and return number
  const two = 2;
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"
