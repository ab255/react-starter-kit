const assert = require('chai').assert;
const scoreWord = require('../lib/components/scoreword.js');

describe('The Test Bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('scoreWord()', function () {
  it('should be a function', function() {
    assert.isFunction(scoreWord);
  });

  it('should score hello as 8 points', function () {
    const word = 'hello';
    assert.equal(scoreWord(word), 8);
  });

  it('should return 0 if empty string', function () {
    const word = '';
    assert.equal(scoreWord(word), 0);
  });

  it('should return 0 if null', function () {
    const word = null;
    assert.equal(scoreWord(word), 0);
  });

  it('should return 0 if string of numbers', function () {
    const word = '123';
    assert.equal(scoreWord(word), 0);
  });

  it('should strip spaces from word', function () {
    const word = ' hello ';
    assert.equal(scoreWord(word), 8);
  });

  it('should strip nonletters from word', function () {
    const word = 'hell9o';
    assert.equal(scoreWord(word), 8);
  });

  it('should take a multiply argument', function () {
    const word = 'hello';
    const multiplier = 2;
    assert.equal(scoreWord(word, multiplier), 16);
  });
});
