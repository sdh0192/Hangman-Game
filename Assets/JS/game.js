// GLOBAL FUNCTIONS
// *-------------------------------------------------------------------------------------------------*

var wordOptions = ["nirvana", "pearljam", "bush", "audioslave"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;



// START GAME FUNCTION
// *-------------------------------------------------------------------------------------------------*


function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessesleft").innerHTML = guessesLeft
    document.getElementById("wincounter").innerHTML = winCount;
    document.getElementById("losscounter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}



// CHECK LETTERS ENTERED BY USER AGAINST RANDOMLY GENERATED WORD
// *-------------------------------------------------------------------------------------------------*


function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        console.log(selectedWord[i]);
        console.log(letter);
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
                document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
                if (document.getElementById("wordToGuess").innerHTML == selectedWord){
                    alert("You won!");
                    //incriment win counter
                    winCount ++
                    document.getElementById("wincounter").innerHTML = winCount;
                    startGame();
    

                }
            }
        }
    }

    else {
        if (guessesLeft == 0) {
            alert("Game over");
            lossCount ++
            document.getElementById("losscounter").innerHTML = lossCount;
            startGame();
        }
        else {
            wrongLetters.push(letter);
            guessesLeft--;
        }


    }





    console.log(blanksAndSuccesses);

}


// FUNCTION FOR COMPLETION OF A ROUND
// *-------------------------------------------------------------------------------------------------*


function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);
    var guessesleft = document.getElementById("guessesleft");
    guessesleft.innerHTML = guessesLeft;
}



// GAME OPERATION
// *-------------------------------------------------------------------------------------------------*


startGame();



document.onkeyup = function () {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}