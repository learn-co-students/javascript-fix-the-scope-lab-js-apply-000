var animal = 'dog'

function myAnimal() {
  return animal
}
myAnimal()

function yourAnimal() {
  var animal = "cat"
  return animal
}
yourAnimal()

function add2(n) {
  return n + two
}
const two = 2
add2(88)

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()
var theFunk = theFunk()
