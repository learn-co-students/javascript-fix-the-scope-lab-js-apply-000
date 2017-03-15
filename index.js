var animal = 'dog'



function myAnimal()  {
  if (animal === 'dog') {
  return "dog";
}
if (animal === 'cat') {
  return 'cat';
}


function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
const two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()
