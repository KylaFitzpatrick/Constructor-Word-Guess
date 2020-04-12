var Letter = require("./Letter")

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is 
// attempting to guess. That means the constructor should define:

function Word(word){
    this.isWon = false;
    this.word = word;
    this.lastLetterGuessedCorrectly = false;
    this.letterArry = this.word.split("").map(function(letter) {
        return new Letter(letter);
    })
    //display letter in array
    this.displayWord = function() {
        return this.letterArry
            .map(function(letter) {
                return letter.display();   
            })
            .join("");
    }
    //display letter if guessed
    this.checkWord = function(letterGuessed) {
        var letterGuessedCorrectly = false;
        this.letterArry.map(function(letter) {
            
            if (letterGuessed.toLowerCase() === letter.letter.toLowerCase() || letter.letter === " " ) {
                letter.isDiplayed = true;
                letterGuessedCorrectly = true;

            }
            return letter;
        })
        this.lastLetterGuessedCorrectly = letterGuessedCorrectly;
    }
   
    this.haveWon = function() {
       var haveWon = true;
       for (var i = 0; i < this.letterArry.length; i++) {
           var letter = this.letterArry[i];
           if (!letter.isDiplayed) {
               haveWon = false;
           }
           
       }
       
       this.isWon = haveWon;
}
}

module.exports = Word;
