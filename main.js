var homePage = document.querySelector('.home');
var homeSubHeader = document.querySelector('.home__subheader');
var homeSelection = document.querySelectorAll('.home__selection');
var homeClassicBox = document.querySelector('.home__classic');
var fighter = document.querySelector('.fighter');
var rock = document.querySelector('.fighter__rock');
var paper = document.querySelector('.fighter__paper');
var scissors = document.querySelector('.fighter__scissors');
var leftWins = document.querySelector('.left__wins');
var rightWins = document.querySelector('.right__wins');
var fighters = document.querySelectorAll('.fighter__fighters')

var computerWins = 0;
var playerWins = 0;

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', fighterPage)

// FUNCTIONS //

function createGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerWins = computerWins + 1;
    console.log('Computer wins! Computer: ' + computerSelection)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerWins = playerWins + 1;
    console.log('Player wins! Computer: ' + computerSelection)
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerWins = computerWins + 1;
    console.log('Computer wins! Computer: ' + computerSelection)
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerWins = playerWins + 1;
    console.log('Player wins! Computer: ' + computerSelection)
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerWins = computerWins + 1;
    console.log('Computer wins! Computer: ' + computerSelection)
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerWins = playerWins + 1;
    console.log('Player wins! Computer: ' + computerSelection)
  } else if (playerSelection === computerSelection) {
    console.log('Draw!')
  }
  leftWins.innerText = 'Wins: ' + playerWins;
  rightWins.innerText = 'Wins: ' + computerWins;
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

// PAGES //

function fighterPage() {
  homeSubHeader.innerText = 'Choose your fighter!';
  for (var i = 0; i < homeSelection.length; i++) {
    homeSelection[i].classList.add('home--hidden');
  }
  fighter.classList.remove('fighter--hidden');
}

function createPlayer(event) {
  if (event.target.classList.contains('fighter__rock')) {
    return 'rock';
  } else if (event.target.classList.contains('fighter__paper')) {
    return 'paper';
  } else if (event.target.classList.contains('fighter__scissors')) {
    return 'scissors';
  }
}

function showdown(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    setTimeout(function sub() {
      paper.classList.add('fighter--hidden')
    }, 1000)
  }
}

function resetGame() {
  setTimeout(function() {
    for (var i = 0; i < fighters.length; i++) {
      fighters[i].classList.remove('fighter--hidden');
    }
  }, 3000)
}

fighter.addEventListener('click', function (event) {
  var playerSelection = createPlayer(event);
  createGame(playerSelection, computerSelection())
  showdown(playerSelection, computerSelection())
  resetGame();
})