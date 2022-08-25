const moves = ['Rock', 'Paper', 'Scissor'];

let score = [0,0];
let computerSelection = '';

const scissor = document.querySelector('#scissor');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const cRock = document.querySelector('#cRock');
const cPaper = document.querySelector('#cPaper');
const cScissor = document.querySelector('#cScissor');

const body = document.querySelector('body');
const mid = document.querySelector('#mid')

const again = document.createElement('button');
again.setAttribute('id', 'again');
again.setAttribute('onclick', 'playAgain()')
again.innerHTML = 'Play Again!'
const dScore = document.querySelector("#score");
const dMessage = document.querySelector("#message");

function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, score) {
    const playerIndex = moves.indexOf(playerSelection);
    if (score[0] !== 3 && score[1] !== 3) {
        cPaper.classList.remove('chosen');
        cRock.classList.remove('chosen');
        cScissor.classList.remove('chosen');
        computerSelection = computerPlay()
        document.querySelector(`#c${computerSelection}`).classList.add('chosen');

        if (computerSelection === playerSelection){
            return 0;
        }else if (computerSelection === moves.at(playerIndex - 1)) {
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
    cPaper.classList.remove('chosen');
    cRock.classList.remove('chosen');
    cScissor.classList.remove('chosen');
    dMessage.innerHTML = '';
    dScore.innerHTML = `${score[0]}-${score[1]}`;
    mid.removeChild(again);
};

function game(playerSelection, score) {
    let round = playRound(playerSelection, score);
    if (round === 0) {
        dMessage.innerHTML =`You Tied!`;
    } else if (round === 1) {
        dMessage.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (round === 2) {
        dMessage.innerHTML =`You Lose! ${computerSelection} beats ${playerSelection}`;
    };

    dScore.innerHTML = `${score[0]}-${score[1]}`

    if (score[0] === 3) {
        dMessage.innerHTML = "You won the game!";
        mid.appendChild(again);
    } else if (score[1] === 3) {
        dMessage.innerHTML = "You lost the game!";
        mid.appendChild(again);
    };

};
