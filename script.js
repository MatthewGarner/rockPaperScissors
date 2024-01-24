// TODOs:
// - Fix playround prompting for text input when round is a tie 
// - Display running score
// - Announce winner when score reaches round limit
//refactor - remove game function


//Game state
let playerScore = 0;
let computerScore = 0;
const scoreLimit = 5;

//Showing game state
const gameArea = document.querySelector('.results-area');
const buttons = document.querySelector('.button-container');

buttons.addEventListener('click', (event) => {
//which button is clicked
let choice = event.target.name;
playRound(choice, getComputerChoice());
});


function announceWinner (winner) {
    alert(`${winner} wins!`);
    return;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameArea.textContent = '';
}

function updateScore (roundResult) {
    gameArea.textContent =`Round result: ${roundResult}, current score is:
        Player: ${playerScore}
        Computer: ${computerScore}`;
}

// Randomly select a move for computer
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
        console.log (`player chose ${playerSelection}, computer chose ${computerSelection}`)

        if (roundResult === 'win') {
            playerScore++;
        }
        else if (roundResult === 'loss') {
            computerScore ++;
        }

        updateScore(roundResult);

        if (playerScore >= scoreLimit) {
            announceWinner('Player');
            return resetGame();
        } 
        else if (computerScore >= scoreLimit) {
            announceWinner('Computer');
            return resetGame();
        }

        return;
    
}
