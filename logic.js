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
        return -1 //'You lose! Paper beats rock!';
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        return 1 //'You win! Rock beats scissors!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 1 //'You win! Paper beats rock!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return -1 //'You lose! Scissors beats paper!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 1 //'You win! Scissors beats paper!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return -1 //'You lose! Rock beats scissors!';
    } else {
        return 0 //'Draw!';
    }
}

const divResults = document.querySelector('.results');
const divScore = document.querySelector(".score");
const buttons = document.querySelectorAll('button');

let scorePlayer = 0;
let scoreComputer = 0;

function applyScore(score){
    if(score > 0){
        scorePlayer++;
    } else if(score < 0){
        scoreComputer++;
    }
    divScore.textContent = `${scorePlayer} - ${scoreComputer}`;
}

function translateResult(player, computer, score) {
    if (score > 0) {
        return `You win! ${player} beats ${computer}`;
    } else if (score < 0) {
        return `You lose! ${computer} beats ${player}`;
    } else {
        return 'Draw!';
    }
}

buttons.forEach(b => b.addEventListener('click', () => {
    let player = b.textContent;
    let computer = getComputerChoice();
    let score = playRound(player, computer);
    applyScore(score);
    result = translateResult(player, computer, score);
    divResults.textContent = result;

    if (scorePlayer === 5) {
        divResults.textContent = "Player wins!";
        resetScores();
    } else if (scoreComputer === 5){
        divResults.textContent = "Computer wins!";
        resetScores();
    }
}));

function resetScores() {
    scorePlayer = 0;
    scoreComputer = 0;
}
