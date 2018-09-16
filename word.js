var Letter = require("./letter");

function Word(word) {
  // need to split the word into a letters array that returns as a new Letter object representing
  //the letters of the underlying word
  this.letters = word.split("").map(function(char) {
    return new Letter(char);
  });
}

//need to create a fx that returns a string representing a word calling on
//each letter of object (first fx in Letter.js) diplays the character or an
//underscore and concatenate those together.

Word.getSolution = function() {
  return this.letters
    .map(function(letter) {
      return letter.getSolution();
    })
    .join(""); //iterates over letter and then returns a string using .join()
};
// need a function that takes a character as an argument and calls the guess fx on each
// letter obj(second function in Letter.js)

Word.guessLetter = function(char) {
  let foundLetter = false;
  this.letters.forEach(function(letter) {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });
  // Log the word guessed so far
  console.log("\n" + this + "\n");
  // return found a letter
  return foundLetter;
};

module.exports = Word;
