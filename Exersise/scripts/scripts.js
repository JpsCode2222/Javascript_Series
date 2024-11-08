// score 
let score = JSON.parse(localStorage.getItem('score')) || {'wins':0,'loses':0,'ties':0};

const displayResult = document.querySelector('.result');

function playGame(playerMove){
    let computerMove = pickComputerMove();
    console.log(computerMove)
    let result = '';
    if (playerMove === 'rock') {
        // result
        if (computerMove === 'rock') {
            result = 'Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose';
        }
        else {
            result = 'You Win';
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else{
            result = 'You Lose';
        }
    }
    else{
        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else{
            result = 'Tie';
        }
    }

    // score
    if(result === 'You Lose'){
        score.loses += 1;
    }
    else if(result === 'You Win'){
        score.wins += 1;
    }
    else{
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    displayResult.innerHTML = `${result}</br> You
<img src="images/${playerMove}-emoji.png" class="result-icon" alt="">
<img src="images/${computerMove}-emoji.png" class="result-icon" alt="">
Computer </br> <p class="score-card">Wins : ${score.wins}. Loses : ${score.loses}, Ties : ${score.ties}</p>`;
}

// Computer Move
function pickComputerMove(){
    let randomNumber = Math.random();
    let computerMove = ''
    if(randomNumber > 0 && randomNumber < 1/3 ){
        computerMove = 'rock';
    }
    else if(randomNumber> 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}

// Reset
function reset(){
    localStorage.removeItem('score');
    score = {
        'wins':0,
        'loses':0,
        'ties':0
    }
    displayResult.innerHTML = `Wins : ${score.wins}. Loses : ${score.loses}, Ties : ${score.ties}`;
}
