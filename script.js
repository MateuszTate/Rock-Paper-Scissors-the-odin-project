let currentLoses = 0;
let currentWins = 0;
let currentDraws = 0;

let getComputerChoice = function(){
    let getComputerChoice = Math.floor(Math.random() * 3)+1;
    if(getComputerChoice===1) return 'rock';
    else if(getComputerChoice===2) return 'paper';
    else if(getComputerChoice===3) return 'scissors';
}


let computerSelection = getComputerChoice();

const howManyWins = document.querySelector('.howManyWins');
const percentOfWins = document.querySelector('.percentOfWins');

let round = function(playerSelection,computerSelection){
    

    const wins = document.querySelector('.wins');
    const loses = document.querySelector('.loses');
    const draws = document.querySelector('.draws');
    

    

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection==='rock' && computerSelection==='paper'){
        currentLoses++;
        console.log('You Lose');
    }
    else if(playerSelection==='rock' && computerSelection==='scissors'){
        currentWins++;
        console.log('You Won');
    }
    else if(playerSelection==='rock' && computerSelection==='rock'){
        currentDraws++;
        console.log('Draw');
    }


    else if(playerSelection==='paper' && computerSelection==='rock'){
        currentWins++;
        console.log('You Won');
    }
    else if(playerSelection==='paper' && computerSelection==='scissors'){
        currentLoses++;
        console.log('You Lose');
    }
    else if(playerSelection==='paper' && computerSelection==='paper'){
        currentDraws++;
        console.log('Draw');
    }


    else if(playerSelection==='scissors' && computerSelection==='rock'){
        currentLoses++;
        console.log('You Lose');
        
    }
    else if(playerSelection==='scissors' && computerSelection==='scissors'){
        currentDraws++;
        console.log('Draw');
        
    }
    else if(playerSelection==='scissors' && computerSelection==='paper'){
        currentWins++;
        console.log('You Won');
        
    }

    wins.textContent = 'Wins: '+currentWins;
    loses.textContent = 'Loses: '+currentLoses;
    draws.textContent = 'Draws: '+currentDraws;

    howManyWins.textContent = 'You won ' + currentWins + '. ' + 'Enemy won ' + currentLoses +'.';
    let percent = currentWins/(currentWins+currentLoses);
    if(currentLoses>0 && currentWins===0){
        percent = 0;
    }
    if(currentLoses>0 || currentWins>0){
        percentOfWins.textContent = 'It is equal to '+(Math.round(percent * 100)) + '%';
        percentOfWins.style.display = 'block';
        
    }
    

    

    
}





document.getElementById('buttonRock').onclick = function() {
    let playerSelection = document.getElementById("buttonRock").value;
    console.log(playerSelection);
    console.log(computerSelection);
    // console.log(round(playerSelection, computerSelection));
    round(playerSelection, computerSelection)
    computerSelection = getComputerChoice();
};

 document.getElementById('buttonPaper').onclick = function() {
    let playerSelection = document.getElementById("buttonPaper").value;
    console.log(playerSelection);
    console.log(computerSelection);
    // console.log(round(playerSelection, computerSelection));
    round(playerSelection, computerSelection)
    computerSelection = getComputerChoice();
};


 document.getElementById('buttonScissors').onclick = function() {
    let playerSelection = document.getElementById("buttonScissors").value;
    console.log(playerSelection);
    console.log(computerSelection   );
    // console.log(round(playerSelection, computerSelection));
    round(playerSelection, computerSelection)
    computerSelection = getComputerChoice();
};















