var Letter = require("./letter.js");

function Word(randomWord) {
  this.randomWord = randomWord;
  this.letterArray=[];
  this.separateWord = function() {
    var letterArray = randomWord.split("");
    for (var i = 0; i < letterArray.length; i++) {
        this.letterArray.push(new Letter(letterArray[i]));
    }
    console.log(this.letterArray);
  };
  this.checkGuess= function(){

    
  }
}

module.exports = Word;
