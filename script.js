function playerSelection() {
    selected = prompt('Which one? pick up!', '');

    //Use replace method with in-sensitive case /..var../i for replace to math Rock Paper Sciisors.
    //Condition with Ternary.
    return (selected.replace(/Rock/i, 'Rock') === 'Rock') ? 'Rock' :
    (selected.replace(/Paper/i, 'Paper') === 'Paper') ? 'Paper' :
    (selected.replace(/Scissors/i, 'Scissors') === 'Scissors') ? 'Scissors' : 'Something wrong';

}

function computerSelection() {
    //Use math.random plus 3 for the result from random 0  - 3.
    let random = Math.floor(Math.random()*3) + 1;

    //Condition normal if, else if, else.
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

//variable for count score.
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(playerSelection, computerSelection) {
    //Take 2 parameter from return result playerSelection function and computerSelection function.
    //Condition normal if, else if, else. with Comparison (Logic oper)
    if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return (`You Lose!, You picked ${playerSelection} and Computer picked ${computerSelection}: Paper beats Rock`)  
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++; 
        return (`You Win!, You ${playerSelection} and Comp ${computerSelection}: Rock beats Scissors`)     
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return (`You Win!, You ${playerSelection} and Comp ${computerSelection}: Paper beats Rock`)
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return (`You Lose!, You ${playerSelection} and Comp ${computerSelection}: Scissors beats Paper`)
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return (`You Lose!, You ${playerSelection} and Comp ${computerSelection}: Rock beats Scissors`)       
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return (`You Win!, You ${playerSelection} and Comp ${computerSelection}: Scissors beats Paper`)
    } else {
        drawScore++;
        return (`Draw!! Focus and try again!!!`)
    }
}

function game() {
    //for loop to call playRound function until 5 times.
    //In playRound call playerSelection and computerSelection.
    for(let i = 1; i <=5; i++) {
        console.log(`${i} ${playRound(playerSelection(), computerSelection())} Player: ${playerScore} Comp: ${computerScore}`);
    }

    //Condition to find the winner.
    if(playerScore > computerScore) {
        console.log(`Congrat! You Win ${playerScore} per ${computerScore}`)
    } else if(playerScore < computerScore) {
        console.log(`Oh no! You Lose ${playerScore} per ${computerScore}`)
    } else {
        console.log(`That fine, it is DRAW! ${playerScore} per ${computerScore}`)
    }
    console.log(`Summary: ${playerScore} | ${drawScore} | ${computerScore}`);
}
game();