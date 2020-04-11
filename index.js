
const inquirer = require("inquirer");
const Word = require("./Word")

function Game() {
    this.requireNewWord = false;
    this.wins = 0;
    this.loses = 0;
    this.guesses = 10;
    this.incorrectLetters = [];
    this.correctLetters = [];
    this.letterArray = "abcdefghijklmnopqrstuvwxyz";
    this.guess = "";

    // this.randomWords = ["united states", "austrailia", "ireland", "paris", "spain", "portugal", "costa rica"];
    this.randomWords = ["ireland", "paris"]
    this.pickRandomWord = function () {
        var randomIndex = Math.floor(Math.random() * this.randomWords.length);
        return this.randomWords[randomIndex];
    }
    this.wordToGuess = new Word(this.pickRandomWord());
    this.init = function () {
        var game = this;
        guess(this.wordToGuess, game);
    }

    this.reset = function () {
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
   
    //new word if true
    if (game.requireNewWord) {

        game.randomWords;
        game.pickRandomWord();
        game.wordToGuess;

        requireNewWord = false;
    }

    var question = {
        name: "guess",
        type: "string",
        message: "Guess a letter!"
    }
    if (game.requireNewWord === false) {
        inquirer.prompt([question])
            .then(function (answer) {
                var letter = answer.guess;
                wordToDisplay.checkWord(letter);
                wordToDisplay.haveWeWon();
                if (!game.letterArray.includes(letter) || letter.length > 1) {
                    console.log("\nPlease try again!\n");
                    guess();
                }
                // if(Word.checkWord !== letter){
                //     // game.guesses--;
                //     console.log(`You have ${game.guesses} guesses remaining!`)
                // }
                if (!wordToDisplay.isWon) {
                    guess(wordToDisplay, game);

                }
                if (!wordToDisplay.isWon && wordToDisplay.isLose) {
                    game.loses++;
                }
                if (game.guesses > 0) {
                    guess()
                }
                else {
                    game.loses--;
                    console.log(`You have lost ${game.loses}!`)
                    resetGame()
                }
            })

    } else {
        game.wins++;
        console.log(`You have won ${game.wins} times!`)
        resetGame()
    }

}

function resetGame() {
    var question = {
        name: "reset",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
    }

    inquirer.prompt([question])
        .then(function (answer) {
            if (answer.reset === "Yes") {
                game.reset();
            } else {
                return;
            }
        })
}

new Game().init();