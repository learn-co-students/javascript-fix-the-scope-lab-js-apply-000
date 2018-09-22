/*
* We declare our favorite animal inside the scope of 
* the 'myAnimal()' function
*/


function myAnimal() {
  var animal = 'dog'
  return animal
}

myAnimal()

/*
* We declare your favorite animal inside the scope of 
* the 'yourAnimal()' function
*/

function yourAnimal() {
  var animal = 'cat'
  return animal
}

yourAnimal()

/*
* In the 'add2()' function, we add 2 to n
*/

function add2(n) {
    // Feel free to move things around!
  const two = 2
  
  return n + 2
}

/*
* We return the string within the function inside
* 'funkyFunction'
*/

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
