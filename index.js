var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  const animal='cat'; // const, let, or var all work here!
                      // var is function scoped, let and const
                      // are block scoped:
                      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
  //const two = 2 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//var theFunk = funkyFunction
//var theFunk = (funkyFunction()) (); // extra parens not nec, but 
                                    // makes it look like IIFE, which
                                    // may make intent clearer?
                                    
var theFunk = funkyFunction()(); //I prefer this
