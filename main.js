var homePage = document.querySelector('.home');
var homeSubHeader = document.querySelector('.home__subheader');
var homeSelection = document.querySelectorAll('.home__selection');
var homeClassicBox = document.querySelector('.home__classic');

var computerWins = 0;
var playerWins = 0;

function createGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('Computer wins! Computer: ' + computerSelection)
    return computerWins = computerWins++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('Player wins! Computer: ' + computerSelection)
    return playerWins = playerWins++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('Computer wins! Computer: ' + computerSelection)
    return computerWins = computerWins++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('Player wins! Computer: ' + computerSelection)
    return playerWins = playerWins++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('Computer wins! Computer: ' + computerSelection)
    return computerWins = computerWins++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('Player wins! Computer: ' + computerSelection)
    return playerWins = playerWins++;
  } else {
    console.log('Draw!')
  }
  
}

function computerSelection() {
  var randomIndex = Math.floor(Math.random() * 3)
  if (!randomIndex) {
    return 'rock';
  } else if (randomIndex === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

createGame('scissors', computerSelection())

// create function to switch from home screen to select fighter screen
// make classic box clickable
  // hide home selection
  // switch subheader to choose your fighter
  // display rps icons

function fighterPage() {
  homeSubHeader.innerText = 'Choose your fighter!';
  for (var i = 0; i < homeSelection.length; i++) {
    homeSelection[i].classList.add('home--hidden');
  }
}

homeClassicBox.addEventListener('click', fighterPage)
