var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat'    //here the initial animal var is being changed to cat
  return animal
}
//-------------------------
function add2(n) {
  const two = 2     // this didnt work because const was after return and couldnt be called
  return n + two

  // Feel free to move things around!
}
//-------------------------
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction().call() // here, the () preceding funkyFunction is what calls/invokes the function. The predecing .call after the first () calls to "execute the return string within it" as shown in the bottom of the lab readme.
//-------------------------