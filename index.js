var animal = 'dog'

function myAnimal() {
  return(animal)
}

function yourAnimal() {
    var myAnimal = 'cat'
    return(myAnimal)
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
}

function add2(n) {
  const two = 2
  return (n + two)

  // Feel free to move things around!

}

var theFunk = "FUNKY!"

function funkyFunction(theFunk) {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
