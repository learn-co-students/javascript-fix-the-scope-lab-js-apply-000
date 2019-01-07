var myanimal = 'dog';
var youranimal = 'cat';

function myAnimal() {
  return myanimal
}

function yourAnimal() {
  return youranimal
}

function add2(n) {
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction () ()

