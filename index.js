const two = 2
var animal= ['dog' , 'cat']
function myAnimal() {
  
  return animal[0]
}
yourAnimal();
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal[1]
}

function add2(n) {
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()
var theFunk =theFunk()

