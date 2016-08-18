var animal = 'dog';
var urAnimal = 'cat';

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return urAnimal;
}

function add2(n) {
  const two = 2;
  return n + two;

  // Feel free to move things around!

}

var funkyFunction = function(){
  return function(){
    return "FUNKY!";
}
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var preFunk = funkyFunction();
var theFunk = preFunk();
