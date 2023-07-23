const winsScore = document.querySelector('.wins_stats'),
losesScore = document.querySelector('.loses_stats'),
playerText = document.querySelector('.user_result'),
computerText = document.querySelector('.comp_result'),
resultText = document.querySelector('.result_of_the_game'),
game_btns = document.querySelectorAll('.game_btn'),
stats = document.querySelector('.stats');

let player, 
computer,
result,
wins = 0,
loses = 0;

game_btns.forEach(button => button.addEventListener('click', () => {

  player = button.textContent;
  computer = computerTurn();
  playerText.textContent = `${player}`;
  computerText.textContent = `${computer}`;
  result = checkWinner(computer, player);
  resultText.textContent = `${result}`;
  changeStats(result);
})
);

function computerTurn() {
  randNum = Math.floor(Math.random() * 3) + 1;
  switch(randNum) {
    case 1: 
      return 'rock';
    case 2: 
      return 'paper';
    case 3: 
      return 'scissors';
  };
}

function checkWinner(computer, player) {
  if (computer === player){
    return 'Draw!'
  } else if (computer === 'rock') {
    return player === 'paper' ? 'Win :)' : 'Lose :('
  } else if (computer === 'paper'){
    return player === 'scissors' ? 'Win :)' : 'Lose :('
  } else {
    return player === 'rock' ? 'Win :)' : 'Lose :('
  }
}

function changeStats(result) {
  if (result === 'Win :)'){
    winsScore.textContent = `${++wins}`;
  } 
  if (result === 'Lose :(') {
    losesScore.textContent = `${++loses}`;
  }
  let IdkHowToCallThat = Math.floor(wins*100/(wins+loses));
  stats.style.background = `linear-gradient(to right, #81B29A ${IdkHowToCallThat}%, #E07A5F ${IdkHowToCallThat}%)`;
}