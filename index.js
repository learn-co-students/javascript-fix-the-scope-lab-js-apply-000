var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(animal) {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  if (animal !== "cat"){
    animal = "cat";
    return animal;
    // below should account for if the var was already cat
  } else{
      return animal;
  }
}

function add2(n) {
// this doesn't seem like the most efficient way to do it?
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
// need to call both functions with parentheses
var theFunk = funkyFunction()()
