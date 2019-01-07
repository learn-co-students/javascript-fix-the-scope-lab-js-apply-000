var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  animal = "cat";
  return animal;
}

 function add2(n) {
// <<<<<<< HEAD
   const two = 2;
   return n + two;
// =======
//   const two = 2;
//   return n + two;
// >>>>>>> 046cd0a702dbe5fc5e580ed4c629c3413a0077c3
  
 }

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();
