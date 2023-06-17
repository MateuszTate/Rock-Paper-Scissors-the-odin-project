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

let round = function(playerSelection,computerSelection){
    

    const wins = document.querySelector('.wins');
    const loses = document.querySelector('.loses');
    const draws = document.querySelector('.draws');

    

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection==='rock' && computerSelection==='paper'){
        currentLoses++;
    }
    else if(playerSelection==='rock' && computerSelection==='scissors'){
        currentWins++;
    }
    else if(playerSelection==='rock' && computerSelection==='rock'){
        currentDraws++;
    }


    else if(playerSelection==='paper' && computerSelection==='rock'){
        currentWins++;
    }
    else if(playerSelection==='paper' && computerSelection==='scissors'){
        currentLoses++;
    }
    else if(playerSelection==='paper' && computerSelection==='paper'){
        currentDraws++;
    }

    else if(playerSelection==='scissors' && computerSelection==='rock'){
        currentLoses++;
        
    }
    else if(playerSelection==='scissors' && computerSelection==='scissors'){
        currentDraws++;
        
    }
    else if(playerSelection==='scissors' && computerSelection==='paper'){
        currentWins++;
        
    }

    wins.textContent = 'Wins: '+currentWins;
    loses.textContent = 'Loses: '+currentLoses;
    draws.textContent = 'Draws: '+currentDraws;
    

    
}





document.getElementById('buttonRock').onclick = function() {
    let playerSelection = document.getElementById("buttonRock").value;
    // console.log(round(playerSelection, computerSelection));
    round(playerSelection, computerSelection)
    computerSelection = getComputerChoice();
};

 document.getElementById('buttonPaper').onclick = function() {
    let playerSelection = document.getElementById("buttonPaper").value;
    // console.log(round(playerSelection, computerSelection));
    round(playerSelection, computerSelection)
    computerSelection = getComputerChoice();
};


 document.getElementById('buttonScissors').onclick = function() {
    let playerSelection = document.getElementById("buttonScissors").value;
    // console.log(round(playerSelection, computerSelection));
    round(playerSelection, computerSelection)
    computerSelection = getComputerChoice();
};













