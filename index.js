function myAnimal() {
  var animal = 'dog';
  return animal;
}

function yourAnimal() {
  var animal = Math.random();
  if(animal < 1) {
    animal = 'cat';
  } else {
    console.log('That\'s impossible.');
  }
  return animal;
}

yourAnimal();

function add2(n) {
  const two = 2;
  return two + n;
}

function funktified() {
     return "FUNKY!";
   }

function funkyFunction() {
   return funktified();
  }
var theFunk = funkyFunction();
