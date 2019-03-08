var myanimal = 'dog'
var youranimal = 'cat'

function myAnimal() {
  return myanimal
}

function yourAnimal() {
  return youranimal
}

function add2(n) {
  const two=2
  return n+two
}

var funkyFunction = function() {
  return function(){
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()()
