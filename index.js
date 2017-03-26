var animal = 'dog'

function myAnimal() {
  return animal
}
//this function accepts no inputs, it just returns the variable that we defined above

function yourAnimal() {
  // creates a new variable within this function and returns it
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two
  // const means that the identifier can't be reassigned, although it can be mutated. needs to be defined first in order to run the return
}

var funkyFunction = function outer() {
  //creates a variable that runs a function called (outer)
  return function inner() {
    //means that the function "outer" runs a new function called "inner" when it is called
    return "FUNKY!"
    //the function "inner" returns the string FUNKY
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
//sets a new variable called the funk whic runs funkyfunction - which returns the inner function, and then runs that inner function again
