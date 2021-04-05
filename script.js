//https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

//global variables to manage score count
let computerScore = 0;
let playerScore = 0;
let currentRound = 1;
let roundLimit;

// get all the choices for the game
const playerInput = document.getElementsByName("choice");
const roundInput = document.querySelector("#rounds");
const playGame = document.getElementById("play-game");
const gameForm = document.getElementById("start-game-form");

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
    updateScoreBoard();
    currentRound++;

    if(currentRound > roundLimit) {
        endGame();
        return result;
    }
    
    updateScoreBoard();
    
    return result;
}

//play a game of n rounds
function startGame(rounds) {
    roundLimit = rounds;

    //reset all the scores
    currentRound = 1;
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();

    //add event listener to play a round when button is clicked on any button
    playerInput.forEach(selection => {
        selection.addEventListener('click', playRound);
    });
}

function endGameMessage(gameResult) {
    if(gameResult === 'player-win') {
        alert(`You win! Your mighty ${playerScore} points trounces the computer's measly ${computerScore}`);
    } else if (gameResult === 'computer-win') {
        alert(`The computers have taken over! Your score of ${playerScore} points couldn't match the computer's ${computerScore}`);
    } else {
        alert(`It's a draw - ${playerScore} points apiece`);
    }
}

function endGame() {
    let gameResult;

    if(playerScore > computerScore) {
        gameResult = 'player-win';
    } else if (computerScore > playerScore) {
        gameResult = 'computer-win';
    } else if (computerScore === playerScore) {
        gameResult = 'draw';
    }
    else 'ERROR'

    endGameMessage(gameResult);

    playerInput.forEach(selection => {
        selection.removeEventListener('click', playRound);
    });

}

gameForm.addEventListener('submit', e => {
    e.preventDefault();
    let roundsToPlay = e.target.elements.rounds.value;

    startGame(roundsToPlay);
})


//game();

