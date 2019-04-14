var animal = 'dog'



function myAnimal() {
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


// I tried a bunch of different things. I solved this lab
// before, so I went to the bootcamp prep track and looked 
// at the Solutions, and was surprised at the answer, and then 
// looked at my solution to the lab and saw that it said lab
// complete even though I didn't solve that one. 
// I haven't been suprised by syntax for a while though, 
// so that was actually kind of nice. 
// but I can't in fair faith put the right answer here.
var theFunk = funkyFunction();
theFunk;
theFunk();

