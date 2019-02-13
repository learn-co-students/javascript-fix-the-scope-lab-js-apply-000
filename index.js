

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
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




// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

function funkyFunction(){
  return function(){ 
    return 'FUNKY!'
    
  }
}
var theFunk = funkyFunction()() 


