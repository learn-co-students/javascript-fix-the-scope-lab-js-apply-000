var animal = 'dog';
// 1. Defines the global variable 'animal'
      // Assigns 'animal' the string 'dog'

function myAnimal() {
  return animal;
}
// 1. Defines the function 'myAnimal'
      // 'myAnimal' accepts no parameters
// 2. Returns the global variable 'animal'
      // 'myAnimal' is in the same scope as 'animal'
      // The function will return the string 'dog' here

function yourAnimal() {
  var animal = 'cat';
  return animal;
}
// 1. Defines the function 'yourAnimal'
      //'yourAnimal' accepts no parameters
// 2. Defines the LOCAL variable 'animal'
      // Assigns 'animal' the string 'cat' WITHIN the 'yourAnimal' function
// 3. Returns the LOCAL variable 'animal'
      // 'animal' is a local variable within the same scope as the 'yourAnimal' return command
      // The local variable 'animal' overrides the global variable 'animal' within 'yourAnimal'
      // The function will return the string 'cat' here

function add2(n) {
  const two = 2;
  return n + two;
}
// 1. Defines the function 'add2'
      // 'add2' accepts one parameter, 'n'
// 2. Defines the local constant variable 'two'
      // Assigns 'two' the integer 2
// 3. Returns the entered integer 'n' plus 2

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};
// 1. Defines the global variable 'funkyFunction'
      // Assigns funkyFunction the execution of a function that accepts no parameters
// 2. The first function returns the execution of a second function that accepts no parameters
// 3. The second function returns the string "FUNKY!"

var theFunk = funkyFunction();
// 1. Defines the global variable 'theFunk'
      //Assigns 'theFunk' the execution of the global variable 'funkyFunction'

theFunk = theFunk();
// 1. Assigns 'theFunk' the execution of itself

// 1. 'theFunk' executes 'theFunk()'
// 2. 'theFunk()' executes 'funkyFunction()'
// 3. 'funkyFunction' executes a 'function()'
// 4. This function returns a 'function()'
// 5. The second function returns the string "FUNKY!"