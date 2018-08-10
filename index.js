var animal = 'dog'
//animal is a global variable. 
function myAnimal() {
  return animal
}
//first function returns just 'dog'
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = 'cat'
  return animal
}
//local scope, I used let because I needed to reassign the global variable. In this one instance, I wanted the animal to represent a 'cat' thus I chose let.
function add2(n) {
  

  // Feel free to move things around!
  const two = 2
  return n + two
}
//in the add2(n) function you could use either var, const, or let. 
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();

//Relationship between both the outer function and inner function. The first funkyFunction calls the outer function, to call the inner vunction a 2nd parenthesis returns the value "FUNKY!"

