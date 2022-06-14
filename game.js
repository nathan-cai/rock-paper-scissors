const moves = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {
    const playerIndex = moves.indexOf(playerSelection.toUpperCase());
    if (playerIndex ===  -1) {
        return -1;
    }else if (computerSelection.toUpperCase() === playerSelection.toUpperCase()){
        return 0;
    }else if (computerSelection.toUpperCase() === moves.at(playerIndex - 1)) {
        return 1;
    }else{
        return 2;
    }
};

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please enter your choice', 'ROCK, PAPER, SCISSORS');
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round === -1) {
            console.log(`Invalid Selection`);
            i--;
        } else if (round === 0) {
            console.log(`You Tied!`);
            i--;
        } else if (round === 1) {
            console.log(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
            playerWins++;
        } else {
            console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
            computerWins++;
        };
     };
    if (playerWins > computerWins) {
        console.log(`You won the game! The score was ${playerWins}-${computerWins}`);
    }else if (playerWins === computerWins) {
        console.log(`You tied! The score was ${playerWins}-${computerWins}`);
    } else {
        console.log(`You lost the game! The score was ${playerWins}-${computerWins}`);
    }
}
game()