const moves = ['ROCK', 'PAPER', 'SCISSORS'];

let score = [0,0];
const scissor = document.querySelector('#scissor');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');

const body = document.querySelector('body');
const again = document.createElement('button');
again.setAttribute('id', 'again');
again.setAttribute('onclick', 'playAgain()')
again.innerHTML = 'Play Again!'
const dScore = document.querySelector("#score");
const dMessage = document.querySelector("#message");

function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection, score) {
    const playerIndex = moves.indexOf(playerSelection.toUpperCase());
    if (score[0] !== 3 && score[1] !== 3) {
        if (computerSelection.toUpperCase() === playerSelection.toUpperCase()){
            return 0;
        }else if (computerSelection.toUpperCase() === moves.at(playerIndex - 1)) {
            score[0]++
            return 1;
        }else{
            score[1]++
            return 2;
        }
    }
};

function playAgain() {
    score = [0,0];
    dMessage.innerHTML = '';
    dScore.innerHTML = `${score[0]}-${score[1]}`;
    body.removeChild(again);
};

function game(playerSelection, score) {
    let computerSelection = computerPlay()
    let round = playRound(playerSelection, computerSelection, score);
    if (round === 0) {
        dMessage.innerHTML =`You Tied!`;
    } else if (round === 1) {
        dMessage.innerHTML = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    } else if (round === 2) {
        dMessage.innerHTML =`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    };

    dScore.innerHTML = `${score[0]}-${score[1]}`

    if (score[0] === 3) {
        dMessage.innerHTML = "You won the game!";
        body.appendChild(again);
    } else if (score[1] === 3) {
        dMessage.innerHTML = "You lost the game!";
        body.appendChild(again);
    };

};
