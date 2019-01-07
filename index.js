var animal = 'dog'
var animals = 'cat'
var two = 2
var theFunk = "FUNKY!"

function myAnimal() {
  return animal
}

function yourAnimal() {

  return animals
}

function add2(n) {
  return n + two

}

var funkyFunction = function(){
  return function(){
    return "FUNKY!"
  }
}

var theFunk =  funkyFunction()()
