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
var fighters = document.querySelectorAll('.fighter__fighters');
var winnerMessage = document.querySelector('.home__winner');

var computerWins = 0;
var playerWins = 0;
var currentComputerSelection = {};
var currentPlayerSelection = {};

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', fighterPage)

// FUNCTIONS //


function createGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerWins = computerWins + 1;
    winnerMessage.innerText = `Computer wins with ${computerSelection}!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerWins = playerWins + 1;
    winner = true;
    winnerMessage.innerText = `Player wins with ${playerSelection}!`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerWins = computerWins + 1;
    winnerMessage.innerText = `Computer wins with ${computerSelection}!`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerWins = playerWins + 1;
    winner = true;
    winnerMessage.innerText = `Player wins with ${playerSelection}!`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerWins = computerWins + 1;
    winnerMessage.innerText = `Computer wins with ${computerSelection}!`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerWins = playerWins + 1;
    winner = true;
    winnerMessage.innerText = `Player wins with ${playerSelection}!`;
  } else if (playerSelection === computerSelection) {
    winner = null;
    winnerMessage.innerText = 'Draw!';
  }
  leftWins.innerText = 'Wins: ' + playerWins;
  rightWins.innerText = 'Wins: ' + computerWins;
}

function createComputer() {
  var randomIndex = Math.floor(Math.random() * 3)
  var selection = {};
  if (!randomIndex) {
    selection.name = 'rock';
    selection.icon = '🪨';
  } else if (randomIndex === 1) {
    selection.name = 'paper';
    selection.icon = '📄';
  } else {
    selection.name = 'scissors';
    selection.icon = '✂️'
  }
  currentComputerSelection = selection;
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
  var selection = {};
  if (event.target.classList.contains('fighter__rock')) {
    selection.name = 'rock';
    selection.icon = '🪨';
  } else if (event.target.classList.contains('fighter__paper')) {
    selection.name = 'paper';
    selection.icon = '📄';
  } else if (event.target.classList.contains('fighter__scissors')) {
    selection.name = 'scissors';
    selection.icon = '✂️';
  }
  currentPlayerSelection = selection;
}

function showdown() {
  setTimeout(function() {
    winnerMessage.classList.remove('fighter--hidden');
    fighter.innerHTML = 
    `<box class="fighter__player">${currentPlayerSelection.icon}
      <p class="fighter__icon">👐</p>
    </box>
    <p class="fighter__vs">⚔️</p>
    <box class="fighter__computer">${currentComputerSelection.icon}
      <p class="fighter__icon">🖥️</p>
    </box>`
  }, 500)
}

function resetGame() {
  setTimeout(function() {
    for (var i = 0; i < fighters.length; i++) {
      fighters[i].classList.remove('fighter--hidden');
    }
    fighter.innerHTML = 
    `<p class="fighter__rock fighter__fighters">🪨</p>
    <p class="fighter__paper fighter__fighters">📄</p>
    <p class="fighter__scissors fighter__fighters">✂️</p>`;
    winnerMessage.classList.add('fighter--hidden');
  }, 3000)
}

fighter.addEventListener('click', function (event) {
  createPlayer(event);
  createComputer();
  createGame(currentPlayerSelection.name, currentComputerSelection.name)
  showdown(currentPlayerSelection.name, currentComputerSelection.name)
  resetGame();
})