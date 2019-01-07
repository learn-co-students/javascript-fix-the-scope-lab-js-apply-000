var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
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

var theFunk = funkyFunction()() //is this for real?

/*returns function() {
    return "FUNKY!"
  }*/
//*OLD* theFunk = theFunk(); // make theFunk equal to the function within theFunk variable.
//apparently you can call a function in a function like <name>()();  

//alert(theFunk()) for testing