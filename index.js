var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal ='cat'   // local variable function uses var
  // How can we make sure that this function and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

//---------

function add2(n) {
  var two = 2  // set two equal to 2
  return parseInt(n, 10) + two
  // Feel free to move things around!
}

//---------

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()  // set the output of funkyFunction() (another function) equal to theFunk variabe
theFunk = theFunk() // the variable theFunk is equal to the output of theFunk() - the () tell it to actually execute the function
