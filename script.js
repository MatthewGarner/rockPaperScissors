//https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

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
function checkResult(playerSelection, computerSelection) {
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
function resultDraw () {
    return "Oooooh it's a tie!";
}

//action when round result is a player win
function resultPlayerWin () {
    return "Incredible - you won this round!";
}

//action when round result is a player loss
function resultPlayerLoss () {
    return "Beaten by the robot this time!";
}

//play a round
function playRound (playerSelection, computerSelection) {
    
    playerSelection = playerSelection.target.id;
    computerSelection = computerPlay();
    console.log("Player selected: " + playerSelection + " & computer selected: " + computerSelection);

    const result = checkResult(playerSelection, computerSelection);
    console.log(result);
    return result;
}

//play a game of n rounds
function game() {
    //let rounds = 5;
    let currentRound = 1;

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

