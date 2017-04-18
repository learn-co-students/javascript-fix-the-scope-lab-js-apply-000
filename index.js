var animal = 'dog'

function myAnimal() {
  return animal
}
var youranimal = 'cat'

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
}

function addN(n) {
  return function(num) {
    return n + num;
  }
}

var myAdd2 = addN(2);
var mySecondAdd2 = addN(2);
var copy = myAdd2;
console.log(myAdd2(5));
console.log('...');
console.log(addN(2)(5));
console.log(addN(4)(2));
//console.log(myAdd2 === mySecondAdd2);
//console.log(addN == copy);

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
