// Generate a random number between 1 and 100
const randomNumber = 69

// Get the necessary HTML elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

// Define a function to check the guessed number
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (Number.isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    }
}

guessButton.addEventListener('click', checkGuess);
