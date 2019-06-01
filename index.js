var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
 var animal = 'cat' 
  return animal 
}

function add2(n) {
  const two = 2
  return n + two

}

var funkyFunction = outsideFunction() {
  return function insidefuction() {
  return "FUNKY!"
  }
}


console.log(funkyFunction()())