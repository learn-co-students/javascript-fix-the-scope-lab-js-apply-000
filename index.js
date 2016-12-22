
var animal = 'dog';
function myAnimal() {
  return 'dog';
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  // Feel free to move things around!
  const two = 2;
  return n + two;
}
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?


var funkyFunction = function() {
  return ()=>{
    return "FUNKY!";
  }

}

var theFunk = funkyFunction();
var theFunk = theFunk();
