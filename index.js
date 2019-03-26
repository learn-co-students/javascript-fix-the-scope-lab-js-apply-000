var animal = 'dog';
//Defines the global variable 'animal'
//Assigns 'animal' the string 'dog'

function myAnimal() {
  return animal;
}
//Defines the function 'myAnimal' that accepts no parameters
//'myAnimal' returns the global variable 'animal'
//Because 'myAnimal' is in the same scope as 'animal,' the function will return the string 'dog' here

function yourAnimal(animal) {
  var animal = 'cat'
  return animal;
}
//Defines the function 'yourAnimal' that accepts one parameter, 'animal'
//Defines the LOCAL variable 'animal'
//Assigns 'animal' the string 'cat' WITHIN the 'yourAnimal' function
//'yourAnimal' returns the LOCAL variable 'animal'
//Because 'animal' is a local variable within the same scope as the 'yourAnimal' return command, the function will return the string 'cat' here

function add2(n) {
  const two = 2;
  return n + two;
}
//Defines the function 'add2' that accepts one parameter, 'n'
//Defines the local constant variable 'two'
//Assigns 'two' the integer 2
//'add2' returns 2 plus the entered integer

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};
//Defines the global variable 'funkyFunction'
//Assigns funkyFunction the execution of a function that accepts no parameters
//The first function returns the execution of a second function that accepts no parameters
//The second function returns the string "FUNKY!"

var theFunk = funkyFunction();
//Defines the global variable 'theFunk'
//Assigns 'theFunk' the execution of the global variable 'Funky Function'

theFunk = theFunk();
//Assigns 'theFunk' the execution of itself

//1. 'theFunk' executes 'theFunk'
//2. 'theFunk' executes 'funkyFunction'
//3. 'funkyFunction' executes a function
//4. This function returns a function
//5. The second function returns the string "FUNKY!"