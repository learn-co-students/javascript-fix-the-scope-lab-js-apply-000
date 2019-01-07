var animal = "dog";

function myAnimal() {
  return animal;
}
var animal2 = "cat";
function yourAnimal() {
 
  return animal2;
}
 
function add2(n) {
 return n + 2;
  
}

var funkyFunction = function() {
  return (function() {
    return "FUNKY!";
  })
}

var theFunk = funkyFunction()();
