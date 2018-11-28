var animal1 = 'dog';

function myAnimal() {
  return animal1;
}

var animal2 = 'cat';

function yourAnimal() {
  return animal2;
}

const two = 2;
function add2(n) {
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
}
}

var theFunk = funkyFunction();
theFunk = theFunk();

