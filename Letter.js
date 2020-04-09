// Letter.js: Contains a constructor, Letter. This constructor 
// should be able to either display 
// an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
// That means the constructor should define:
function Letter(value, boardArray, resetGame, numGuesses) {
    this.answer = value;
    this.letterGuessed = false;
    this.boardArray = boardArray;
    this.resetGame = resetGame;
    this.numGuesses = numGuesses;

    //user guess in getupdate board function
    //make answer a string
    //if user guess hasnt guessed display underscores for answer
    //else length of the board array and if the index of the answer is guessed by user user guess is displayed in board array
    this.getUpdateBoard = function (userGuess) {
        var newAnswerArray = this.answer.split("")
        console.log("user guess:", userGuess.length)
        if (userGuess.trim().length === 0) {

            for (var i = 0; i < newAnswerArray.length; i++) {
                this.boardArray.push("_")
                if (newAnswerArray[i] === " ")
                    this.boardArray[i] = " "
            }


        } else {
            for (var i = 0; i < this.boardArray.length; i++) {
                if (newAnswerArray[i] === userGuess) { //if user guesses letter correctly assign letter to board
                    this.boardArray[i] = userGuess
                    this.letterGuessed = true;
                    console.log("Correct!!!")
                }
                if(userGuess.length > 0) {
                    console.log("Incorrect!!!\n")
                    this.numGuesses = 10
                    this.numGuesses--;
                    console.log(this.numGuesses + " guesses remaining!\n")

                }

                }

            }

            return this.boardArray
        }
        //verify the answer equals userguess
        //if answer equals userguess then display new word
        this.checkAnswer = function () {
            if (this.boardArray === this.answer) {
                console.log("You win!")
                this.numGuesses = 10;
                // }
                // for (var i = 0; i < this.boardArray.length; i++) {
                // if(this.boardArray[i] !== "_"){
                //     console.log("it works")
                this.getUpdateBoard()
            }
        }
        // return this.resetGame
        // }
        //verify user selection
        //if choice yes then reset numguesses and newboardarray
        //if choice is no exit game
        // this.resetGame = function(){
        //     if(resetGame.choices === "yes"){
        //     this.numGuesses; 
        //     }
        // }

    }




    module.exports = Letter;
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter 
// has been guessed, or a placeholder (like an underscore) if the 
// letter has not been guessed

// A function that takes a character as an argument and checks it against the 
// underlying character, updating the stored boolean value to true if it was 
// guessed correctly

