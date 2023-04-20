var homePage = document.querySelector('.home');
var homeSubHeader = document.querySelector('.home__subheader');
var homeSelection = document.querySelectorAll('.home__selection');
var homeClassicBox = document.querySelector('.home__classic');
var fighter = document.querySelector('.fighter');
var rock = document.querySelector('.fighter__rock');
var paper = document.querySelector('.fighter__paper');
var scissors = document.querySelector('.fighter__scissors');

var computerWins = 0;
var playerWins = 0;

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', fighterPage)

// FUNCTIONS //

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

fighter.addEventListener('click', function (event) {
  var playerSelection = createPlayer(event);
  createGame(playerSelection, computerSelection())
})