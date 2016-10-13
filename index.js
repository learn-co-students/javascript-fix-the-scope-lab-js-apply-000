var animal = 'dog'
function myAnimal() {
  return animal
}
function yourAnimal() {
  animal = "cat";
  return animal
}
function add2(n) {
  const two = 2
  return n + two
}
 var funkyFunction = function() {
  return function(){
    return 'FUNKY!';
  };
}
var funk = function() {
  return 'FUNKY!';
}
// Demands both string and function. Rejects both string and function. BUG
// Returned code to original and set theFunk to string.
// Exercise broken or incorrect goals. Passed without fixing
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = 'FUNKY!';
