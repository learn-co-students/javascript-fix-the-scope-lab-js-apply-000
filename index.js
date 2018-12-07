var animal;

var animalOne = 'dog';
var animalTwo = 'cat';


function myAnimal() {
  animal = animalOne;
  return animal;
}

function yourAnimal() {
  animal = animalTwo;
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()();

