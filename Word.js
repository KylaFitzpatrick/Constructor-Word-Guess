var Letter = require("./Letter")

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is 
// attempting to guess. That means the constructor should define:

function Word(answer, boardArray){
    this.answer = answer
    this.answerArray = []
    this.boardArray = boardArray
    this.wordString = function(){
        for(i = 0; i < answer.length; i++){
           var letter = new Letter(answer[i])
            console.log(this.answerArray[i].push(letter))
        }
  
    }
    

    this.checkUserGuess = function(userGuess){
        var letter = new Letter(this.answer, this.boardArray)
        return letter.getUpdateBoard(userGuess)
    }
}
module.exports = Word;
// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the 
// function on each letter object (the first function defined in Letter.js) that 
// displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function 
// on each letter object (the second function defined in Letter.js)