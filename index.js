var animal = 'dog';

function myAnimal() {
  animal = "dog";
  return animal;
}


function yourAnimal() {
  animal = "cat";
  return animal;
}

function add2(n) {

  const two = 2;

  return n + two;

  // Feel free to move things around!
}

function funkyFunction() {
  return function() {
    return "FUNKY!";
  };
}

var theFunk = funkyFunction()();
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
