/*global scope: variables declared outside of function */
//-------------------------------------------------

function myAnimal() {
  var animal = 'dog';
  return animal;
}
myAnimal();

describe('Fix the Scope', function() {
})

describe('myAnimal()', function() {
  it('returns my animal', () => {
    expect(window.myAnimal()).toEqual('dog')
  })
})
//----------------------------------------------------
function yourAnimal() {
  var animal = 'cat';
  return animal;
}

yourAnimal();

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      expect(window.yourAnimal()).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })
//--------------------------------------------------------
function add2(n) {
  var two = 2;
  return n + two;
}
  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })
//-----------------------------------------------
var funkyFunction = function() {
  return function() {
    return 'FUNKY!';
  }
}
  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

var theFunk = funkyFunction()();

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })
