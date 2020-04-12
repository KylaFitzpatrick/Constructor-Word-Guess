
function Letter(letter) {
    this.letter = letter;
    this.isDiplayed = false;
    this.display = function() {
        if(this.letter === " "){
            this.isDisplayed = true;
            return this.letter = " "
        }
        return this.isDiplayed ? ` ${this.letter} ` : ' _ '
    }
}

    module.exports = Letter;


