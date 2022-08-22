function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
    case 0:
        return 'ROCK';
    case 1:
        return 'PAPER';
    case 2:
        return 'SCISSORS';
    default:
        return '';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You lose! Paper beats rock!';
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        return 'You win! Rock beats scissors!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You win! Paper beats rock!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You lose! Scissors beats paper!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! Scissors beats paper!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You lose! Rock beats scissors!';
    } else {
        return 'Draw!';
    }
}

const divResults = document.querySelector('.results');
const divScore = document.querySelector(".score");
const buttons = document.querySelectorAll('button');

buttons.forEach(b => b.addEventListener('click', () => {
    let player = b.textContent;
    let computer = getComputerChoice();
    let result = playRound(player, computer);

    divResults.textContent = result;
}));

let scorePlayer = 0;
let scoreComputer = 0;

divScore.textContent = `${scorePlayer} - ${scoreComputer}`;

function resetScores() {
    scorePlayer = 0;
    scoreComputer = 0;
}

if (scorePlayer === 5) {
    divResults.textContent = "Player wins!";
    resetScores();
} else if (scoreComputer === 5){
    divResults.textContent = "Computer wins!";
    resetScores();
}