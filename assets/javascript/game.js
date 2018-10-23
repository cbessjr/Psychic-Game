// The Psychic Game


// Create variable for player wins.
// Create variable for player loses.
// Create variable for player guesses. Allow ten guesses.
// Create variable for player attempts.

var playerWin = 0;
var playerLose = 0;
var playerGuess = 0;
var playerAttempts;


// Create array of letters 

 var psyLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

   
    // Create additional variables to store key events
    var playerGuessKey;
    var playerGuessKeyAppend = "";


    // Create additional variables to store increment, random index, and random array selection    
    // var i;
    var index = Math.floor(Math.random() * 27);
    var psyGuessKey = psyLetters[index]; 

    
    // Create variables to assign to ids to write to the screen 
    var playerWinDisplay;
    var playerLoseDisplay;
    var playerGuessDisplay;
    var playerAttemptDisplay;

    var keyCount = 0;

    // Initiating for-loop    
    // for (var i = 0; i < 11; i++) {


        // console.log(i);


        // Function to get the onkeyup event, gather the player key entered, get elements by ID      
        document.onkeyup = function(event) {

        if ((keyCount>9) && (playerGuessKey != psyGuessKey)) {
            
            // playerWinDisplay.textContent = "Wins: ";
            // playerLoseDisplay.textContent = "Loses: ";
            playerGuessDisplay.textContent = "Guesses Left: ";
            playerAttemptDisplay.textContent = "Your Guesses So Far: ";

            playerLose++;
            keyCount = 0;
            // playerWin = 0;
            // playerLose = 0;
            playerGuess = 0 ;
            playerAttempts = 0;

            playerGuessKeyAppend = "";
            
            // return;

            } else {

                playerGuessKey = event.key;
                playerAttempts++;
        
                
                playerWinDisplay = document.getElementById("wins");
                playerLoseDisplay = document.getElementById("loses");
                playerGuessDisplay = document.getElementById("guessLeft");
                playerAttemptDisplay = document.getElementById("guessSoFar");
        
        
        
                    // Compare the random variable and the onkeyup variable to see if they match
                    // if (playerGuessKey === "a") {           test
                    // if (playerGuessKey === psyGuessKey.includes(playerGuessKey)) {       test
        
                    if (playerGuessKey === psyGuessKey) {
        
        
                        playerWin++;
                        playerGuess=0;
                        playerGuessKeyAppend="";
        
                    }   else{
        
                        playerGuess++;
        
                    }
        
                    // Player guess to append for display to the screen
         
                    playerGuessKeyAppend = playerGuessKeyAppend + " " + playerGuessKey;
        
                    // Display of values to the player
                    playerWinDisplay.textContent = "Wins: " + playerWin;
                    playerLoseDisplay.textContent = "Loses: " + playerLose;
                    playerGuessDisplay.textContent = "Guesses Left: " + (10 - playerGuess);
                    playerAttemptDisplay.textContent = "Your Guesses So Far: " + playerGuessKeyAppend;
                    
                    keyCount++;
        

            }

        }    

    // }






