function myAnimal() {
  const animal = 'dog';
  return animal;
}

function yourAnimal() {
  const animal = 'cat';
  return animal;
}

function add2(n) {
  return n + 2;
}

var funkyFunction = function outsideFunction() {
  return function insideFunction() {
    return 'FUNKY!';
  }
}

var theFunk = funkyFunction()();

