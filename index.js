var myanimal = 'dog'
var youranimal = 'cat'

function myAnimal() {
  return myanimal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal
}

function add2(n) {
    const two = 2
  return n + two

  // Feel free to move things around!

}
var theFunk = 'FUNKY!'

function funkyFunction() {
  return function(){
  return theFunk 
}
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
