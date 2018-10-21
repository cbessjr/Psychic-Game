// The Psychic Game


// Create variable for player wins.
// Create variable for player loses.
// Create variable for player guesses. Allow ten guesses.
// Create variable for player attempts.

var playerWin = 0;
var playerLose = 0;
var playerGuess = 0;
var playerAttempts;

//

var playerWinDisplay = document.getElementById("wins");
var playerLoseDisplay = document.getElementById("loses");
var playerGuessDisplay = document.getElementById("guessleft");
var playerAttemptDisplay = document.getElementById("guessSoFar");

// Create array of letters 

 var psyLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//User guess by key press

// Random select a letter from the array and store to variable called psyGuess

document.onkeyup = function(event) {

    var playerGuessKeyAppend = "";

    for (playerAttempts = 0; playerAttempts <= 10; playerAttempts++) {

        var playerGuessKey = event.key;
        var index = Math.floor(Math.random() * 27);
        var psyGuessKey = psyLetters[index];                                           // did not need .valueof. This was breaking the code.

        // var psyGuessKey = psyLetters[Math.floor(Math.random() * 27)];               //This did not work when implemented WHY?????  //Found the issue. Was using math.random(math.random)...wrong syntax!!!!  Still did not work!!!



        // console.log(playerAttempts);

            // if (playerGuessKey === "a") {

            if (playerGuessKey === psyGuessKey) {

            // if (playerGuessKey === psyGuessKey.includes(playerGuessKey)) {

                alert("You Won");
                playerWin++;
                playerGuess++;
                playerWinDisplay.textContent = playerWin;


            }   else{

                alert("You Lost");
                playerLose++;
                playerGuess++;

            }

            playerGuessKeyAppend = playerGuessKey.valueOf + " " + playerGuessKey.valueOf

            // playerWinDisplay.textContent = "Wins: " + playerWin;
            playerLoseDisplay.textContent = "Loses: " + playerLose;
            playerGuessDisplay.textContent = "Guesses Left: " + (10 - playerGuess);
            playerAttemptDisplay.textContent = "Your Guesses SO Far: " + playerGuessKeyAppend;
            
            

    }    


}



// Listen for the .onclick from the user and store the entry to variable
// The variable will need to be displayed 

// Compare the random variable and the .onclick variable to see if they match

// Display an alert for the user win or loss