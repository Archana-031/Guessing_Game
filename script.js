let randomNumber;
let guessCount;
let maxAttempts;

function startGameWithAttempts() {
    randomNumber = Math.floor(Math.random() * 100);
    guessCount = 0;
    maxAttempts = 5;
    document.getElementById('game-output').innerText = `Guess the number (0-100). You have ${maxAttempts} attempts.`;
    document.getElementById('guess-input').disabled = false;
}

function startGameWithoutAttempts() {
    randomNumber = Math.floor(Math.random() * 100);
    guessCount = 0;
    maxAttempts = Infinity; // No limit on attempts
    document.getElementById('game-output').innerText = 'Guess the number (0-100). There are no limits on attempts.';
    document.getElementById('guess-input').disabled = false;
}

function submitGuess() {
    const guess = parseInt(document.getElementById('guess-input').value);
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
        return;
    }
    guessCount++;
    if (guess === randomNumber) {
        document.getElementById('game-output').innerText = `Congratulations! You guessed the number ${randomNumber} in ${guessCount} attempts.`;
        document.getElementById('guess-input').disabled = true;
    } else if (guessCount >= maxAttempts) {
        document.getElementById('game-output').innerText = `Sorry, you've used all ${maxAttempts} attempts. The number was ${randomNumber}.`;
        document.getElementById('guess-input').disabled = true;
    } else {
        const hint = guess < randomNumber ? 'higher' : 'lower';
        document.getElementById('game-output').innerText = `Wrong guess! Try a ${hint} number.`;
    }
}

function stopPlaying() {
    document.getElementById('game-output').innerText = 'Stopped Playing!';
    document.getElementById('guess-input').disabled = true;
}
