let animal = 'dog';
function myAnimal() {
  return animal;
}
  // You should not need to modify this function

function yourAnimal() {
let animal = `cat`;
  return animal;
}
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work


function add2(n) {
  const two = 2;
  return n + two;
}
// Feel free to move things around!

let funkyFunction = function() {
  return function() {
    return `FUNKY!`;
  }
}

let theFunk = funkyFunction()();

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

