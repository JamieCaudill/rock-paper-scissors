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
var homeButton = document.querySelector('.left__home');

// DATA MODEL //

var computerWins = 0;
var playerWins = 0;
var currentComputerSelection = {};
var currentPlayerSelection = {};
var winConditions = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper']];

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', fighterPage)
fighter.addEventListener('click', displayWinner)
homeButton.addEventListener('click', homePage)

// FUNCTIONS //

function createGame(player, computer) {
  if (player === computer) {
    return 'Draw!';
  }
  for (var i = 0; i < winConditions.length; i++) {
    if (player === winConditions[i][0] && computer === winConditions[i][1]) {
      playerWins = playerWins + 1;
      return `Player wins with ${player}!`;
    } 
  }
  computerWins = computerWins + 1;
  return `Computer wins with ${computer}!`;
}

function displayWinnerMessage(winner) {
  winnerMessage.innerText = winner;
}

function updateScore() {
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
  homeButton.classList.remove('left--hidden');
}

function homePage() {
  homeSubHeader.innerText = 'Choose your game!';
  for (var i = 0; i < homeSelection.length; i++) {
    homeSelection[i].classList.remove('home--hidden');
  }
  fighter.classList.add('fighter--hidden');
  homeButton.classList.add('left--hidden');
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

function displayWinner(event) {
  createPlayer(event);
  createComputer();
  displayWinnerMessage(createGame(currentPlayerSelection.name, currentComputerSelection.name))
  showdown(currentPlayerSelection.name, currentComputerSelection.name)
  updateScore()
  resetGame();
}

