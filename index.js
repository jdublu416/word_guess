var word = require("./word.js");
var inquirer = require('inquirer');

inquirer.prompt([
     question = 
        {
          type: 'input',
          name: 'guessedLetter',
          message: "Please guess a letter...",
        validate: function(value) {
            var letters = /^[a-zA-Z]+$/;
        var pass = value.match(
         letters
        );
        if (pass) {
          return true;
        }
  
        return 'Please enter an alphabetic character';
  }

        }


]).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});