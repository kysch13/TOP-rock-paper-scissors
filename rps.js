let humanScore = 0;
let computerScore = 0;

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
    const choice = window.prompt('Please choose Rock, Paper, or Scissors');
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toUpperCase();
    const computerSelection = computerChoice.toUpperCase();
    let roundResult = '';

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
    if (roundResult === 'Win') {
        console.log(`You won! Your ${humanSelection} beat the computer's ${computerSelection}`);
        humanScore++;
    } else if (roundResult === 'Lose') {
        console.log(`Sorry, you lost. The computer's ${computerSelection} beat your ${humanSelection}`);
        computerScore++;
    } else if (roundResult === 'Draw') {
        console.log(`It's a draw! You both chose ${humanSelection}. Let's try that again,`);
        // redo the current round
        playRound(getHumanChoice(), getComputerChoice());
    } else {
        console.log(`Hmmm... something went wrong. No winner can be declared. Please try again.`);
    }
}

function playGame(){
    for (let i=0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
}

playGame();
