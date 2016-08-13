var animal = 'dog'

function myAnimal() {
  return animal
}


function yourAnimal() {
  var animal = 'cat'

  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}


var theFunk = 'FUNKY!'
var funkyFunction = function() {
  return function(theFunk) {
    return theFunk
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
