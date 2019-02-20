var animal = 'dog';

function myAnimal() {
  return animal;
  }

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

  const two = 2;
function add2(n) {
  return n + two;

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()();

//I'm using this resource: http://adripofjavascript.com/blog/drips/variable-and-function-hoisting.html
//and this one: https://www.w3schools.com/js/js_functions.asp
