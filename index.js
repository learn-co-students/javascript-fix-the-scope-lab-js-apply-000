var animalMy = 'dog'
var animalYour = 'cat'

function myAnimal() {
  return animalMy
}

function yourAnimal() {
  return animalYour
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {      //From the solution page. this line is funkyFunction
  return function() {                 //this line would be funkyFunction()
    return "FUNKY!"                   //this line would then be funkyFunction()(), just iterated twice instead
  }                                   //having to be called twice like what I did below, same result!! 
}

var theFunk = funkyFunction()         //could also just be funkyFunction()() instead of calling again below
theFunk=theFunk()
