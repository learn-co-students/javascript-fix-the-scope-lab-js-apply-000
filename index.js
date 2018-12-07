
var animal = 'dog'

function myAnimal() {
  return animal // this will return dog
}

function yourAnimal() {
  var animal = 'cat' // new value is assigned to variable animal
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal // return cat  
}

function add2(n) {
  const two = 2 // const two set to 2, before return 
  //return n + two
  return parseInt(n, 10) + two //modified code

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()() 