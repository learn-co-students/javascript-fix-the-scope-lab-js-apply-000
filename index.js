var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return n + two

  // Feel free to move things around!
  const two = 2
}

//var funkyFunction = function() {
function funkyFunction () {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
var theFunk = funkyFunction()

function yourAnimal () {
  var animal = 'cat';
  return animal;
}

//describe('add2(n)', function() {
  //it('adds two to n', function() {
    //const n = Math.floor(Math.random() * 1000)
    //expect(window.add2(n)).toEqual(n + 2)
  //})
//})

function add2 (n) {
  var two = 2;
   return n + two;
}

var funkyFunction = function() {
//function funkyFunction () {
  return function() {
    return 'FUNKY!'
  }
}
var theFunk = funkyFunction()()
