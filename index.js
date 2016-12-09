var animal1 = 'dog'
var animal2 = 'cat'

function myAnimal() {
  return animal1
}

function yourAnimal() {
  return animal2
}

function add2(n) {
  const two = 2
  return n + two
}
var funkyFunction = function() {
  return function(){
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()
