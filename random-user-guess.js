var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do {
    guess = prompt("I'm thinking of a number from 1 to 10. What is it?");
    guessCount ++;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
    //while () {
    //
    //}
    document.write("<p>The random number was: " + randomNumber + "<p>");
    document.write("<p>It took the you " + attempts + " attempts to get it right.</p>");