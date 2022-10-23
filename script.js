function playerSelection() {
    selected = prompt('Which one? pick up!', '');

    return (selected.replace(/Rock/i, 'Rock') === 'Rock') ? 'Rock' :
    (selected.replace(/Paper/i, 'Paper') === 'Paper') ? 'Paper' :
    (selected.replace(/Scissors/i, 'Scissors') === 'Scissors') ? 'Scissors' : 'Something wrong';

}
//console.log(playerSelection());

function computerSelection() {
    let random = Math.floor(Math.random()*3) + 1;
    //console.log(random);

    if(random === 1) {
        return 'Rock';
    } else if(random === 2) {
        return 'Paper';
    } else if(random === 3) {
        return 'Scissors';
    } else {
        return null;
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return (`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Paper beats Rock`);
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return (`Yes!! You Win !!, You picked ${playerSelection} and Computer picked ${computerSelection}: Rock beats Scissors`);
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return (`Yes!! You Win !!, You picked ${playerSelection} and Computer picked ${computerSelection}: Paper beats Rock`);
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return (`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Scissors beats Paper`);
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return (`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Rock beats Scissors`);
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return (`Yes!! You Win !!, You picked ${playerSelection} and Computer picked ${computerSelection}: Scissors beats Paper`);
    } else {
        return (`Draw!! Focus and try again!!!`)
    }
}

function game() {
    for(let i = 1; i <=5; i++) {
        console.log(`${i} ${playRound(playerSelection(), computerSelection())}`);
    }
}
game();