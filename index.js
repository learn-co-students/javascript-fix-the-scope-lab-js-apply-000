
//Test One 
function myAnimal() {
  var animal = 'dog';
  return animal;
}

//Test Two
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal;
}

//Test Three
function add2(n) {
  var testThree =  (n + 2);
  return testThree;
}

//Test Four
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

//Test Five
var theFunk = funkyFunction()()