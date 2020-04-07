// index.js: The file containing the logic for the course of the game, 
// which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
var inquirer = require("inquirer");
var Word = require("./Word")
var lettersArray = "abcdefghijklmnopqrstuvwxyz"
var words = ["United States", "Austrailia", "Ireland", "Paris", "Spain", "Portugal", "Costa Rica"]
var answer = words[Math.floor(Math.random() * words.length)];
var boardArray = []
// Create a new word object
var word = new Word(answer, boardArray);
var incorrectLetters = []
var correctLetters = []
var numGuesses = 10;
var guess = ""
// resetGame();;
// Prompts the user for each guess and keeps track of the user's remaining guesses

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

// var dog={
//     name:"woffy",
//     age:12
// }

// var cat={
//     name:"fluffy",
//     age:10
// }


// function Animal(name,age){
//     this.name=name;
//     this.age=age;

// }

// Animal.prototype.isHavingFun=false

//  dog= new Animal("woffy",12)

 
// dog.food="bone"

// console.log(dog)

//  cat= new Animal()
// cat.isSleepy=true

// console.log(cat)

// console.log("----------------------------------")

// console.log(dog.isHavingFun)

// console.log(cat.isHavingFun)

// cat.isHavingFun=true
// console.log(cat.isHavingFun)

function startGame(){
 
        console.log(word.checkUserGuess(guess).join(" "))
        console.log(answer)
    
 
inquirer
    .prompt([
        {
            name: "guess",
            type: "string",
            message: "? Guess a letter!",
        } 
    ])
    .then(function (userInput) {


      word.checkUserGuess(userInput.guess)
      guess = userInput.guess
        // Call check to verify letter
        // if (userInput.guess === word[i]) {
        //     word.check(answer.guessedCorrect);
        //     console.log(answerArray[i] = "_")

        // }
        // if (answer.guess !== word[i]) {
        //     word.findActor(answer.guessedIncorrect);
        //     num--;
        // }
        startGame()
    });




}
    function resetGame(){
       inquirer.prompt([
        {
            name: "list",
            type: "string",
            message: "Restart Game?",
            choices: ["yes", "no"],
            name: "resetGame"
        }
    ])
        .then(function(input){
            if(input.reset === yes){
               incorrectLetters = []
               correctLetters = []
               numGuesses = 10 
            }
        })
        
       
    }


    startGame();