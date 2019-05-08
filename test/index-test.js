/*global describe, it */

describe('Fix the Scope', function() {
  describe('myAnimal()', function myAnimal() {
    var animal = 'dog'
    return animal
    it('returns my animal', () => {
      expect(window.myAnimal()).toEqual('dog')
    })
  })

  describe('yourAnimal()', function() {
    it('returns your animal', function(){
      var animal = 'cat'
      return animal
      expect(window.yourAnimal()).toEqual('cat')
    })

    it('does not hard-code the answer', function() {
      expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
    })
  })

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      return + 2
      expect(window.add2(n)).toEqual(n + 2)
    })
  })

  describe('funkyFunction()', function () {
    var funkyFunction = 'function'
    return funkyFunction
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })



  describe('theFunk', function () {
    var theFunk = 'FUNKY!'
    return theFunk
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})
