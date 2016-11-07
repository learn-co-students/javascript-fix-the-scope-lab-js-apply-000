var animal = 'dog';

function myAnimal() {
  return animal
}

function yourAnimal(cb) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
    animal = 'cat'
    return myAnimal()
}

function add2(n) {
  const two = 2
  return n + two;
}

var funkyFunction = function(cb) {
  return function() {
    return "FUNKY!";
  };
}

// function funkyFunction(cb) {
//   return function(word) {
//     return "FUNKY!";
//   };
// }

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction(());
theFunk();
