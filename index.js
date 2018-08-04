var animal = 'dog';
var animal2 = 'cat';

function myAnimal() {
  return animal;
}

myAnimal();

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal2;
}

yourAnimal();

function add2(n) {
  return (n + 2);
}

function funkyFunction() {
  return function() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!";
