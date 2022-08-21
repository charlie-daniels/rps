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

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        let player = prompt('Enter choice:');
        let computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
}

