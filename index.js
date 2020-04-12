
const inquirer = require("inquirer");
const Word = require("./Word")

function Game() {
    this.guesses = 10;
    this.wins = 0;
    this.loses = 0;
  
    this.randomWords = ["Austrailia", "Ireland", "Paris", "Spain", "Portugal", "Africa"];
    this.pickRandomWord = function () {
        var randomIndex = Math.floor(Math.random() * this.randomWords.length);
        return this.randomWords[randomIndex];
    }
    this.wordToGuess = new Word(this.pickRandomWord());
    this.init = function () {
        var game = this;
        guess(this.wordToGuess, game);
    }

    this.resetAndStartNewGame = function () {
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
        .then(function (answer) {
            var letter = answer.guess;
            wordToDisplay.checkWord(letter);
            wordToDisplay.haveWon();
            
            // If we have not won:
            if (!wordToDisplay.isWon) {
                // If the last letter was guessed correctly
                if (wordToDisplay.lastLetterGuessedCorrectly) {
                    console.log(`\x1b[32m%s\x1b[0m`,`\nCorrect!\n`)
                    guess(wordToDisplay, game);
                    // If the last letter was NOT guessed correctly
                } else {
                    // Decrement the guessed the user has left
                    game.guesses--;
                    //If guesses is 0 then restart game
                    if (game.guesses === 0) {
                        console.log('\x1b[31m%s\x1b[0m','\nSorry, you lose!\n')
                        playAgain(game);
                    } else {
                        console.log('\x1b[31m%s\x1b[0m', `\nIncorrect!`) 
                        console.log(`\nYou have ${game.guesses} guesses remaining!\n`)
                        guess(wordToDisplay, game);
                    }

                }

                // If we HAVE won:
            } else {
                console.log(wordToDisplay.displayWord());
                console.log(`\x1b[32m%s\x1b[0m`,`\nYou won!\n`)
                playAgain(game);  
            }

        })
}



function playAgain(game) {
    var question = {
        name: "reset",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
    }

    inquirer.prompt([question])
        .then(function (answer) {
            if (answer.reset === "Yes") {
                game.resetAndStartNewGame();
            } else {
                return;
            }
        })
}

new Game().init();
