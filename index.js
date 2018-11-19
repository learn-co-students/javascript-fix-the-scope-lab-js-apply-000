var animal = 'dog'
//Animal is already defined, so we just return it//
function myAnimal() {
  return animal
}
//We re-assign our variable in order to return the new value 'cat'//
function yourAnimal() {
  var animal = 'cat';
  return animal
}
/*Return always comes first and ignores what comes after. Therefore; we move
  our constant above the return*/
function add2(n) {
  const two = 2;
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
//By adding another "()", we tell function to execute the string within//
var theFunk = funkyFunction()()
