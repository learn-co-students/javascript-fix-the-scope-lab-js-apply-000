var animal = 'dog'

function myAnimal() {
  // var thing = "tree";
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = 'cat';
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2;
  console.log(n);
  console.log(two);
  return  n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()

/*
var theFunk = funkyFunction()
/*
function theFunk() {
  funkyFunction()
}
}
/*
value of theFunk is:
function() {
  return "FUNKY!"
}
*/
/*
theFunk = theFunk()
*/
/*
value of theFunk is:
 "FUNKY!"
*/


/*
function funkyFunction() {
  return function() {
    return "FUNKY!"
  }
}



var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

function() {
  return "FUNKY!"
}

functionName()

funkyFunction()()
object.doSomething().doAnother()
*/

/*
Three levels of function nesting:
var funkyFunction = function() {
  return function() {
    return function() {
      return "FUNKY!"
    }
  }
}
var theFunk = funkyFunction()()()
*/
