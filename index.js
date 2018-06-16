let animal = 'dog';

const myAnimal = () => animal;

const yourAnimal = () => {
  // How can we make sure that this function
  // and the above function both pass?
  let animal = 'cat';

  // P.S.: You can't just hard-code 'cat' below
  return animal;
};

const add2 = (n) => {
  // Feel free to move things around!
  const two = 2;
  return n + two;
};

const funkyFunction = () => () => "FUNKY!";

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
const theFunk = funkyFunction()();
