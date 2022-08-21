function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
    case 0:
        return 'Rock';
    case 1:
        return 'Paper';
    case 2:
        return 'Scissors';
    default:
        return '';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You lose! Paper beats rock!';
    } else if(playerSelection === 'ROCK' && computerSelection === 'ROCK') {
        return 'Draw!';
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        return 'You win! Rock beats scissors!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        return 'Draw!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You win! Paper beats rock!';
    } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You lose! Scissors beats paper!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! Scissors beats paper!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You lose! Rock beats scissors!';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return 'Draw!';
    }
}

