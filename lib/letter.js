function Letter(char) {
  // the test() method executes a search for a match between a regular expression
  // and a specified string. Returns true or false (regExp).
  this._isVisible = !/[a-z1-9]/i.test(char);
  this._char = char;
}

Letter.toString = function() {
  if (this._isVisible) {
    return this._char;
  } else {
    return "_";
  }
};

Letter.getSolution = function() {
  return this.char;
};

Letter.guess = function(charGuess) {
  if (charGuess.toUpperCase() === this.char.toUpperCase()) {
    this._isVisible = true;
    return true;
  }
  return false;
};

module.exports = Letter;
