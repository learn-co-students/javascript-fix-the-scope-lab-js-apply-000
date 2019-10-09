var myPet = 'dog'
let yourPet = 'cat'
let two = 2

function myAnimal() {
  return myPet
}

function yourAnimal() {
  return yourPet
}


function add2(n) {
  return n + two
}



var funkyFunction = function() {
  return function() {
    return 'FUNKY!'
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
let theFunk = funkyFunction()();