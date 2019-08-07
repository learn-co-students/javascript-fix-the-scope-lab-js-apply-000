var animal = 'cat'


function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
const n = Math.floor(Math.random() * 1000)
  const two = 2
function add2(n) {
  return n + two
}
var funkyFunction = function() {
  return function(){
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()