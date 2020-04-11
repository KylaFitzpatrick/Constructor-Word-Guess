
const inquirer = require("inquirer");
const Word = require("./Word")

function Game() {
    this.newWord =false;
    this.guesses = 10;
    // this.incorrectLetters = [];
    // this.correctLetters = [];
    this.letterArray = "abcdefghijklmnopqrstuvwxyz";
    

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
        // this.wins = 0;
        // this.loses = 0;
        this.guesses = 10;
        this.wordToGuess = new Word(this.pickRandomWord());
        var game = this;
        guess(this.wordToGuess, game);

    }
    this.newGame = function (){
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
    if (game.newWord === false) {
        inquirer.prompt([question])
            .then(function (answer) {
                var letter = answer.guess;
                wordToDisplay.checkWord(letter);
                wordToDisplay.haveWon();
                if (!game.letterArray.includes(letter) || letter.length > 1) {
                    console.log(`Please try again!`);
                    game.reset();
                    if(game.guesses > 0 && wordToDisplay.checkWord(letter)){
                        console.log(`You have ${game.guesses} remaining!`)
                        game.guesses--;
                        if(guesses === 0){
                            console.log(`You lost!`)
                            game.newWord = true;
                        }
                        
                    }
                
                    
                        
                    
                    
                }else{
               
                if (!wordToDisplay.isWon) {
                    guess(wordToDisplay, game);
                    // if(letter !== )

                }else {
                    console.log(`Correct! Next word!`)
                    game.reset()
                   
    
                }
                
                // if (game.guesses > 0) {
                //     game.reset()
                // }
                // else {
                    
                //     console.log(`You lost!`)
                //     game.newWord = true;
                // }
            }
            })
        }else{
            
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

 // if(Word.checkWord !== letter){
                //     // game.guesses--;
                //     console.log(`You have ${game.guesses} guesses remaining!`)
                // }