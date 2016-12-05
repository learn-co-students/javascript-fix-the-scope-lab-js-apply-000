//  Index.js
//  Created by Charles Albert Samuels on 12.04.16.

var animal = 'dog'
var otheranimal = 'cat'

//EFFECTS: returns animal
function myAnimal() {
  return animal
}

//EFFECTS: returns otheranimal
function yourAnimal() {
  return otheranimal
}

//EFFECTS: adds 2 to n
function add2(n) {
  const two = 2
  return n + two
}

//EFFECTS: returns a function
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

//EFFECTS: returns the output of the function within funkyFunction
var theFunk = funkyFunction()()
