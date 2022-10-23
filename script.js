let computerSelection;

function getComputerChoice() {
    let random = Math.floor(Math.random()*3) + 1;

    if(random === 1) {
        computerSelection = 'Rock';
    } else if(random === 2) {
        computerSelection = 'Paper';
    } else if(random === 3) {
        computerSelection = 'Scissors';
    } else {
        comSelected = null;
    }
    console.log(computerSelection);
}
getComputerChoice();

let playerSelection;

function playerChoice() {
    selected = prompt('Which one? pick up!', '');

    playerSelection = 
    (selected.replace(/Rock/i, 'Rock') === 'Rock') ? 'Rock' :
    (selected.replace(/Paper/i, 'Paper') === 'Paper') ? 'Paper' :
    (selected.replace(/Scissors/i, 'Scissors') === 'Scissors') ? 'Scissors' : 'Something wrong';

    console.log(playerSelection);

    //return selected;
}
playerChoice();


function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log(`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Paper beats Rock`);
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`Yes!! You Win !!, You picked ${playerSelection} and Computer picked ${computerSelection}: Rock beats Scissors`);
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`Yes!! You Win !!, You picked ${playerSelection} and Computer picked ${computerSelection}: Paper beats Rock`);
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log(`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Scissors beats Paper`);
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log(`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Rock beats Scissors`);
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`Yes!! You Win !!, You picked ${playerSelection} and Computer picked ${computerSelection}: Scissors beats Paper`);
    } else {
        console.log(`Draw!! Focus and try again!!!`)
    }
}

playRound(playerSelection, computerSelection);