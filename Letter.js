// Letter.js: Contains a constructor, Letter. This constructor 
// should be able to either display 
// an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
// That means the constructor should define:
function Letter(value, boardArray) {
    this.answer = value;
    this.letterGuessed = false;

    this.boardArray = boardArray


    this.checkLetter = function () {
        if (this.character === " ") {
            this.letterGuessed = true
            this.character.push(" ");
            console.log(this.character)
        } else {
            if (this.letterGuessed === false) {
                this.character.push("_");
            } else {
                this.character
            }

        }
        this.checkGuess = function (guess) {
            if (this.character === guess) {
                this.letterGuessed = true;
            }
        }
    }



    this.getUpdateBoard = function (userGuess) {
        var newAnswerArray = this.answer.split("")
        console.log("user guess:", userGuess.length)
        if (userGuess.trim().length===0) {
            for (var i = 0; i < newAnswerArray.length; i++) {
                this.boardArray.push("_")
            }
        }
        else {
            for (var i = 0; i < this.boardArray.length; i++) {
                if (newAnswerArray[i] === userGuess) {
                    this.boardArray[i] = userGuess
                }
            }
        }


        return this.boardArray
    }

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

