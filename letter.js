function Letter (underlyingChar) {
  this.correctlyGuessed =false;
  this.underlyingChar=underlyingChar;
  this.checkLetter = function(guessedLetter) {
    if (guessedLetter === this.underlyingChar) {
      //letter matches so the response will be
      console.log("Your letter " + guessedLetter + " is correct!");
      return true;
    } else {
      console.log("Bummer, you guessed incorrectly, Go again!");
      return false;
    }
  };
}
module.exports = Letter;
