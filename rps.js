let humanScore = 0;
let computerScore = 0;

const humanHand = document.querySelector('#human-hand > img');
const computerHand = document.querySelector('#computer-hand > img');

const humanScoreboard = document.getElementById('human-score');
const computerScoreboard = document.getElementById('computer-score');
const roundResultsDisplay = document.getElementById('round-results');

const controlBtns = document.getElementById('rps-controls');
const btnRock = document.getElementById('rps-ctrl-rock');
const btnPaper = document.getElementById('rps-ctrl-paper');
const btnScissors = document.getElementById('rps-ctrl-scissors');

const gameOverPopup = document.getElementById('gameover-popup');
const btnPlayAgain = document.getElementById('playAgainBtn');

controlBtns.addEventListener("click", function(e){
    const choice = e.originalTarget.alt;
    playRound(choice, getComputerChoice());
});

btnPlayAgain.addEventListener("click", resetGame);

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOverPopup.classList.toggle('active-popup');
    humanHand.src = `img/rps-placeholder.png`;
    computerHand.src = `img/rps-placeholder.png`;
    roundResultsDisplay.textContent = '';
    roundResultsDisplay.style.display = 'none'
    humanScoreboard.textContent = '0';
    computerScoreboard.textContent = '0';

}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'ERROR';
    }
}

function getHumanChoice() {
    //const choice = window.prompt('Please choose Rock, Paper, or Scissors');
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toUpperCase();
    const computerSelection = computerChoice.toUpperCase();
    let roundResult = '';

    humanHand.src = `img/p_${humanChoice.toLowerCase()}.png`;
    computerHand.src = `img/c_${computerChoice.toLowerCase()}.png`;

    // Compare human selection to computer selection and determine winner
    if (humanSelection === 'ROCK') {
        switch (computerSelection) {
            case 'ROCK':
                roundResult = 'Draw';
                break;
            case 'PAPER':
                roundResult = 'Lose';
                break;
            case 'SCISSORS':
                roundResult = 'Win';
                break;  
        } 
    } else if (humanSelection === 'PAPER') {
        switch (computerSelection) {
            case 'ROCK':
                roundResult = 'Win';
                break;
            case 'PAPER':
                roundResult = 'Draw';
                break;
            case 'SCISSORS':
                roundResult = 'Lose';
                break;  
        } 
    } else if (humanSelection === 'SCISSORS') {
        switch (computerSelection) {
            case 'ROCK':
                roundResult = 'Lose';
                break;
            case 'PAPER':
                roundResult = 'Win';
                break;
            case 'SCISSORS':
                roundResult = 'Draw';
                break;  
        } 
    }

    // Display message with results of the round and update score
    roundResultsDisplay.style.display = 'inline-block';
    if (roundResult === 'Win') {
        roundResultsDisplay.textContent = `Your ${humanSelection} beat the computer's ${computerSelection}`;
        humanScore++;
        humanScoreboard.textContent = humanScore;
    } else if (roundResult === 'Lose') {
        roundResultsDisplay.textContent = `The computer's ${computerSelection} beat your ${humanSelection}`;
        computerScore++;
        computerScoreboard.textContent = computerScore;
    } else if (roundResult === 'Draw') {
        roundResultsDisplay.textContent = `It's a draw! You both chose ${humanSelection}. Let's try that again,`;
    } else {
        roundResultsDisplay.textContent = `Hmmm... something went wrong. No winner can be declared. Please try again.`;
    }

    if (humanScore === 5) {
        gameOverPopup.classList.toggle('active-popup');
        gameOverPopup.querySelector('.popup-msg').textContent = `Congratulations, you won! You beat the computer with a score of ${humanScore} to ${computerScore}.`;
    } else if (computerScore === 5) {
        gameOverPopup.classList.toggle('active-popup');
        gameOverPopup.querySelector('.popup-msg').textContent = `Sorry, you lost. :( The computer won with a score of ${computerScore} to ${humanScore}.`;
    }
}