var animal = "dog";

function window.myAnimal() {
  return animal
}

window.myAnimal(animal);

function window.yourAnimal() {
  var animal = "cat";
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

window.yourAnimal(animal);

function window.add2() {
  const two = 2;
  return n + two;

  // Feel free to move things around
}
window.add2(n);

var theFunk = window.funkyFunction();

function window.funkyFunction() {
  return "function";
}

window.funkyFunction();

function window.theFunk() {
    return "FUNKY!";
}

typeof window.funkyFunction();
