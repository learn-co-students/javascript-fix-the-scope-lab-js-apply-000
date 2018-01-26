//// Problem 1
function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var userInput  = prompt("What is your favorite animal?");
  var animal = userInput;
  return animal
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
}

console.log(myAnimal());
console.log(yourAnimal());


//// Problem 2
function add2(n) {
    const two = 2
    return n + two
// Feel free to move things around!
}


//// Problem 3
function funkyFunction() {
  function theFunk() {
    return "FUNKY!";
    }
    return theFunk();
}

funkyFunction();

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
//you only need to modify the code below this line.
