/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function() {
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      expect(window.yourAnimal()).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})

var animal = 'dog';

function myAnimal() {
  return animal;
}

myAnimal();

function yourAnimal() {
  var animal = 'cat';
  return animal;

}
 yourAnimal();
 
 function add2(n){
   n = n + 2;
   return n;
 }
  
  add2(51);
  
var funkyFunction = function outerShellFunction() {
  return function theFunk() {
    return "FUNKY!";
  }};

funkyFunction()();
  
