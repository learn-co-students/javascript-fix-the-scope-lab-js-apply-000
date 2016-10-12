var animal = 'dog'
var animal2 = 'cat'


function myAnimal() {
  return animal;
}

function yourAnimal() {
  return animal2;
}

function add2(n) {
  return n + 2;
}
add2(708);

var funkyFunction = function(){
  return function(word){
    return word;
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var insideFunk = funkyFunction();
var theFunk = insideFunk('FUNKY!');
