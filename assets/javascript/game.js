// The Psychic Game


// Create variable for player wins.
// Create variable for player loses.
// Create variable for player guesses. Allow ten guesses.
// Create variable for player attempts.

var playerWin = 0;
var playerLose = 0;
var playerGuess = 0;
var playerAttempts;

//getelementid had been here but was coming up undefined. Ask question why this had to be moved. Possibly the scope....

// Create array of letters 

 var psyLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//User guess by key press

// Random select a letter from the array and store to variable called psyGuess

// document.onkeyup = function(event) {

    

    var playerGuessKey;
    var playerGuessKeyAppend = "";
    var i = 0;
    var index = Math.floor(Math.random() * 27);
    var psyGuessKey = psyLetters[index]; 

    var playerWinDisplay = document.getElementById("wins");
    var playerLoseDisplay = document.getElementById("loses");
    var playerGuessDisplay = document.getElementById("guessLeft");
    var playerAttemptDisplay = document.getElementById("guessSoFar");

    for (i = 0; i < 11; i++) {

        document.onkeyup = function(event) {

        playerGuessKey = event.key;
        playerAttempts++

        
    


        // var psyGuessKey = psyLetters[Math.floor(Math.random() * 27)];        


        // Compare the random variable and the .onclick variable to see if they match
            // if (playerGuessKey === "a") {

            if (playerGuessKey === psyGuessKey) {

            // if (playerGuessKey === psyGuessKey.includes(playerGuessKey)) {

                playerWin++;
                playerGuess++;
                // playerWinDisplay.textContent = playerWin;


            }   else{

                playerLose++;
                playerGuess++;

            }

            playerGuessKeyAppend = playerGuessKeyAppend + " " + playerGuessKey;

            playerWinDisplay.textContent = "Wins: " + playerWin;
            playerLoseDisplay.textContent = "Loses: " + playerLose;
            playerGuessDisplay.textContent = "Guesses Left: " + (10 - playerGuess);
            playerAttemptDisplay.textContent = "Your Guesses So Far: " + playerGuessKeyAppend;
            



    }    


// }




// Listen for the .onclick from the user and store the entry to variable
// The variable will need to be displayed 


// Display an alert for the user win or loss