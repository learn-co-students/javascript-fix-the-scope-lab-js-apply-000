var animal = 'dog';
var animal2 = 'cat';
function myAnimal() {
  return animal;
}
myAnimal();

function yourAnimal() {
  return animal2;
}
yourAnimal();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const two = 2;
function add2(n) {
  return n + two;
  // Feel free to move things around!
}
add2(877);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction();
theFunk = "FUNKY!";
