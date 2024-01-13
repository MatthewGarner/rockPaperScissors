// Get computer's random move
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return 'rock';
    } 
    else if (randomChoice === 1) {
        return 'paper';
    }
    else if (randomChoice === 2) {
        return 'scissors';
    }
};

function getPlayerChoice() {
    //prompt for input
    let playerChoice;

    while (!playerChoice) {
        let playerInput = prompt('Enter r for ROCK, p for PAPER, s for SCISSORS');

    // allow user to escape out of input loop
    //TODO: Stop returning undefined if player escapes out
    if (playerInput === null || playerInput === '') {
        break;
    }
        switch (playerInput) {
            case 'r': 
                playerChoice = 'rock';
                break;
            case 'p': 
                playerChoice = 'paper';
                break;
            case 's':
                playerChoice = 'scissors';
                break;
        }
    }
    return playerChoice;
}

function playRound (playerSelection, computerSelection) {
// take player inputs and return string that declares round winner and player choices
    //For any given player selection define win, loss and tie
    //If Tie - replay round

    let roundResult;
    playerSelection = playerSelection.toLowerCase();

    // check player selection against computer selection and determine winner
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock': 
                roundResult = 'tie';
                break;
            case 'paper':
                roundResult = 'loss';
                break;
            case 'scissors': 
                roundResult = 'win';
                break;
        }
    }
    else if (playerSelection ==='paper') {
        switch (computerSelection) {
            case 'rock': 
                roundResult = 'win';
                break;
            case 'paper':
                roundResult = 'tie';
                break;
            case 'scissors': 
                roundResult = 'loss';
                break;
        }
    }
    else if (playerSelection ==='scissors') {
        switch (computerSelection) {
            case 'rock': 
                roundResult = 'loss';
                break;
            case 'paper':
                roundResult = 'win';
                break;
            case 'scissors': 
                roundResult = 'tie';
                break;
        }
    }

    console.log(`player chose ${playerSelection}, computer chose ${computerSelection}`)
    //if it's a tie, replay the round
    if (roundResult === 'tie') {
        return playRound(getPlayerChoice(), getComputerChoice());
    }
    else {
        return roundResult;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round;
    let roundLimit = 5;

    for (round = 1; round <= roundLimit; round ++) {
        const roundResult = playRound(getPlayerChoice(), getComputerChoice());

        if (roundResult === 'win') {
            playerScore++;
        }
        else if (roundResult === 'loss') {
            computerScore ++;
        }

        console.log(`Round result: ${roundResult}, current score is:
        Player: ${playerScore}
        Computer: ${computerScore}`);
    }
    
    return 'Game over'; 

}