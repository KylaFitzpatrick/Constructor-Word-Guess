
var inquirer = require("inquirer");
var Word = require("./Word")

function Game() {
    
    this.wins = 0;
    this.loses = 0;
    this.guesses = 10;

    // this.randomWords = ["united states", "austrailia", "ireland", "paris", "spain", "portugal", "costa rica"];
    this.randomWords = ["ireland"]
    this.pickRandomWord = function() {
        var randomIndex = Math.floor(Math.random() * this.randomWords.length);
        return this.randomWords[randomIndex];
    }
    this.wordToGuess = new Word(this.pickRandomWord());
    this.init = function() {
        var game = this;
        guess(this.wordToGuess, game);
    }

    this.reset = function() {
        this.wins = 0;
        this.loses = 0;
        this.guesses = 10;
        this.wordToGuess = new Word(this.pickRandomWord());
        var game = this;
        guess(this.wordToGuess, game);
       
    }
}



function guess(wordToDisplay, game) {
    console.log(wordToDisplay.displayWord());

    
    var question = {
        name: "guess",
        type: "string",
        message: "Guess a letter!"
    }
    
    inquirer.prompt([question])
        .then(function(answer) {
            var letter = answer.guess;
            wordToDisplay.checkWord(letter);
            wordToDisplay.haveWeWon();

            if (!wordToDisplay.isWon){
                // game.loses++;
                guess(wordToDisplay, game);
                
            } else {
                game.wins++;
                console.log(`We have won ${game.wins} times!`)
            }
            
            if(game.guesses === 0){
                resetGame
            }
           
        })
       
}
function resetGame(){
    var question = {
        name: "reset",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes" , "No"]
    }
    
    inquirer.prompt([question])
        .then(function(answer) {
            if(answer.reset === "Yes"){
                game.reset();
            }else{
                return;
            }
})
}

new Game().init();