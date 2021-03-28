console.log("test");

function generateRandomNo () {
    let outputNumber = Math.floor(Math.random() * 3);
    return outputNumber;
}

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

function computerPlay() {
    const num = generateRandomNo();

    const computerSelection = getRpsResponse(num);
    return computerSelection;
}

function userPlay () {

let userInput;

    while (true) {
        userInput = prompt("Enter rock, paper or scissors").toLowerCase(); 

        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
            break;
        }
    }
   return userInput;
}



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

function resultDraw () {
    return "Oooooh it's a tie!";
}

function resultPlayerWin () {
    return "Incredible - you won this round!";
}

function resultPlayerLoss () {
    return "Beaten by the robot this time!";
}

function playRound () {
    let playerSelection = userPlay();
    const computerSelection = computerPlay();
    console.log("Player selected: " + playerSelection + " & computer selected: " + computerSelection);

    const result = checkResult(playerSelection, computerSelection);
    console.log(result);
    return result;
}

function game() {
    let rounds = 5;
    let currentRound = 1;

    while (currentRound <= rounds) {
        playRound();
        currentRound++;
    }
}

game();

