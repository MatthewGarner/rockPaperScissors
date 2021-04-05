//https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

//global variables to manage score count
let computerScore = 0;
let playerScore = 0;
let currentRound = 1;

//define area for results to be added
const resultsLog = document.querySelector('#results-log');

//target score areas & round counter
const playerScoreBoard = document.querySelector('#player-score .score-number');
const computerScoreBoard = document.querySelector('#computer-score .score-number');
const roundCounter = document.querySelector('#round-number');

//get random number to randomise computer play
function generateRandomNo () {
    let outputNumber = Math.floor(Math.random() * 3);
    return outputNumber;
}

//get a rock, paper or scissors based on random number input
function getRpsResponse (num) {
    if (isNaN(num) ||num > 2 || num < 0) {
        throw 'Number should be between 0 and 2';
    } else if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    }
    else if (num === 2) {
        return 'scissors';
    }
}

//generate the computers move - depends on generating a random number and mapping this to a rock paper scissors action
function computerPlay() {
    const num = generateRandomNo();

    const computerSelection = getRpsResponse(num);
    return computerSelection;
}

//compare the player and computer moves - return an outcome
function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return resultDraw();
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return resultPlayerLoss();
        } else return resultPlayerWin();
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return resultPlayerLoss();
        } else return resultPlayerWin();
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return resultPlayerLoss();
        } else return resultPlayerWin();
    }
}

//action when round result is a draw
function resultDraw() {
    return "Oooooh it's a tie!";
}

//action when round result is a player win
function resultPlayerWin() {
    playerScore++;
    return "Incredible - you won this round!";
}

//action when round result is a player loss
function resultPlayerLoss() {
    computerScore++;
    return "Beaten by the robot this time!";
}

function updateScoreBoard() {
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    roundCounter.textContent = currentRound;
}

//play a round, get the result and increment the round counter
function playRound (playerSelection, computerSelection) {
    
    playerSelection = playerSelection.target.id;
    computerSelection = computerPlay();
    console.log("Player selected: " + playerSelection + " & computer selected: " + computerSelection);

    const result = getResult(playerSelection, computerSelection);
    
    const roundResult = document.createElement('li');
    roundResult.textContent = result;

    resultsLog.appendChild(roundResult);
    
    currentRound++;
    updateScoreBoard();
    return result;
}

//play a game of n rounds
function game() {
    let rounds = 5;
    currentRound = 1;

    while (currentRound <= rounds) {
        playRound();
        currentRound++;
    }
}

// get all the choices for the game
const playerInput = document.getElementsByName("choice");

//add event listener to play a round when button is clicked on any button
playerInput.forEach(selection => {
    selection.addEventListener('click', playRound)
})




//game();

