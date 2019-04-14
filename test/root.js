global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const js = path.resolve(__dirname, '..', 'index.js');
  const babelResult = babel.transformFileSync(js, {
    presets: ['es2015']
  });

  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    global.window = window;

    return done();
  });function myAnimal() {

var animal = 'dog'
  return animal
}

function yourAnimal() {

  var animal = 'cat'

  return animal
}

function add2(n) {
  const two = 2

  return n + two
}

var funkyFunction = function() { 
  return function() {
    return "FUNKY!"
  }
}


var theFunk = funkyFunction()() 
});
