var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  //define animal variable as 'cat' so that myAnimal function can return the right animal
  var animal = 'cat'
  return animal
}

function add2(n) {
  /*flipped the two equations around because once return 
  statement runs the function ends rendering anything 
  afterwards irrelevant*/
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

/*the variable funkyFunction returns only the function, not the 
output of the function. So, in order to return "FUNKY!", i need 
to call the function twice so use ()() */
var theFunk = funkyFunction()()

