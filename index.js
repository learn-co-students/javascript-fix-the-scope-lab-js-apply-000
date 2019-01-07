// How can we make sure that this function
// and the above function both pass?
// P.S.: You can't just hard-code 'cat' below
function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

const two = 2 // Made this constant GLOBAL, it was local and after the return clause so it iterated over it
function add2(n) {
  return n + two
}
//BREAK//
var funkyFunction = function() {
   return function() {
     return "FUNKY!"
   }
 }
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// Note: you only need to modify the code below this line.

var theFunk = 'FUNKY!'
