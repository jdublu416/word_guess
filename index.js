var Word = require("./word.js");
var inquirer = require("inquirer");

var words = ["Mustang", "Camero", "Charger", "Chevelle", "Porsche", "Ferrari"];
randomWord = words[Math.floor(Math.random() * words.length)];

var word = new Word(randomWord);
word.separateWord();
console.log(word);
// inquirer
//   .prompt([
//     (question = {
//       type: "input",
//       name: "guessedLetter",
//       message: "Please guess a letter...",
//       validate: function(value) {
//         var letters = /^[a-zA-Z]+$/;
//         var pass = value.match(letters);
//         if (pass) {
//           return true;
//         }

//         return "Please enter an alphabetic character";
//       }
//     })
//   ])
//   .then(answers => {
//     console.log(JSON.stringify(answers, null, "  "));
//   });
