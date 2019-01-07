
function myAnimal(){
var animal = 'dog';
return animal;
}

function yourAnimal() {
var animal = "cat";
return animal;
}


const two = 2
function add2(n) {
  return n + two
}
add2(3)



// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line

var funkyFunction = function(){
   return function(){	   
     return "FUNKY!";	     
}
}
funkyFunction();	
var theFunk = funkyFunction()();

