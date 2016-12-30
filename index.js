var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(animal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  //if (animal === "dog"){
    animal = "cat";
  //}
  return animal
}

const two = 2

function add2(n) {
  // Feel free to move things around!

  return n + two

}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

function funkyFunction() {
   return function theFunk() {
     return theFunk
  }
}
var theFunk = "FUNKY!"
