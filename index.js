//variable should be on top
const two = 2
var animal = 'dog'


function myAnimal() {
  return animal
}
/*
* not sure how you want me to code this
*/

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  
  // hard coding animal = "cat";
  // promt user for his/her animal var userAnimal = window.prompt("What is your animal: ");
  //var cat only usable in yourAnimal function (inside the scope)
  var cat = "cat";
  return cat;
}

function add2(n) {
  return n + two

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var a = funkyFunction();
var theFunk = a();
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
