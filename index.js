

function myAnimal() {
  var animal = 'dog'; //'dog' goes local in order to 'reuse' animal variable
  return animal
}

var animal = 'cat'; //'cat' goes global so not necessary to hardcode within function
function yourAnimal() {
  return animal;
}

function add2(n) {
  const two = 2
  return n + two;
}

var funkyFunction = function(){
  return function(){  //self invoking function only runs once
    return 'FUNKY!'
  }
}

var theFunk = funkyFunction()(); //theFunk assigned return value of self invoking function
