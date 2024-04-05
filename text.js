const assert = require('chai').assert;
const utils = require('./index'); // Assuming your index.js file is in the same directory

describe('Utility Functions', function() {
  describe('reverseString', function() {
    it('should reverse a string', function() {
      assert.equal(utils.reverseString('hello'), 'olleh');
    });

    it('should return an empty string when given an empty string', function() {
      assert.equal(utils.reverseString(''), '');
    });

    it('should reverse a string with special characters', function() {
      assert.equal(utils.reverseString('hello world!'), '!dlrow olleh');
    });
  });

  describe('isPalindrome', function() {
    it('should return true for palindrome strings', function() {
      assert.isTrue(utils.isPalindrome('racecar'));
    });

    it('should return false for non-palindrome strings', function() {
      assert.isFalse(utils.isPalindrome('hello'));
    });

    it('should return true for an empty string', function() {
      assert.isTrue(utils.isPalindrome(''));
    });
  });

  // Add similar describe blocks and it blocks for other utility functions...

});
