const two = 2

function yourAnimal(animal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal
}

var animal = 'dog';

function myAnimal() {
  return animal
}

function add2(n) {
  return n + two

  // Feel free to move things around!
}

function funkyFunction() {
	function second() {
    return "FUNKY!";
  }
  return second();
}
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
