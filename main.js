var homeSubHeader = document.querySelector('.home__subheader');
var homeSelection = document.querySelectorAll('.home__selection');
var homeClassicBox = document.querySelector('.home__classic');
var homeAdvancedBox = document.querySelector('.home__advanced');
var fighter = document.querySelector('.fighter');
var fighterClassic = document.querySelector('.fighter__classic');
var fighterAdvanced = document.querySelector('.fighter__advanced')
var rock = document.querySelector('.fighter__rock');
var paper = document.querySelector('.fighter__paper');
var scissors = document.querySelector('.fighter__scissors');
var leftWins = document.querySelector('.left__wins');
var rightWins = document.querySelector('.right__wins');
var fighters = document.querySelectorAll('.fighter__fighters');
var winnerMessage = document.querySelector('.home__winner');
var homeButton = document.querySelector('.left__home');
var fighterShowdown = document.querySelector('.fighter__showdown');
var fighterPlayer = document.querySelector('.fighter__player');
var fighterComputer = document.querySelector('.fighter__computer');

// DATA MODEL //

var computerWins = 0;
var playerWins = 0;
var currentComputerSelection = {};
var currentPlayerSelection = {};
var winConditions = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper'], ['rock', 'wrestler'], ['paper', 'bomb'], ['scissors', 'wrestler'], ['bomb', 'rock'], ['bomb', 'scissors'], ['wrestler', 'paper'], ['wrestler', 'bomb']];
var classicOrAdvanced = true; 

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', function() {
  fighterPage()
  classicOrAdvanced = true;
});
fighter.addEventListener('click', displayWinner)
homeButton.addEventListener('click', homePage)
homeAdvancedBox.addEventListener('click', function() {
  fighterPage('advanced');
  classicOrAdvanced = false;
});

// FUNCTIONS //

function createGame(player, computer) {
  if (player === computer) {
    return 'Draw!';
  }
  for (var i = 0; i < winConditions.length; i++) {
    if (player === winConditions[i][0] && computer === winConditions[i][1]) {
      playerWins = playerWins + 1;
      return `Player wins!`;
    } 
  }
  computerWins = computerWins + 1;
  return `Computer wins!`;
}

function displayWinnerMessage(winner) {
  winnerMessage.innerText = winner;
}

function updateScore() {
  leftWins.innerText = 'Wins: ' + playerWins;
  rightWins.innerText = 'Wins: ' + computerWins;
}


function createComputer() {
  if (classicOrAdvanced) {
    var numOfFighters = 3;
  } else {
    numOfFighters = 5;
  };
  var randomIndex = Math.floor(Math.random() * numOfFighters)
  var selection = {};
  if (!randomIndex) {
    selection.name = 'rock';
    selection.icon = '🪨';
  } else if (randomIndex === 1) {
    selection.name = 'paper';
    selection.icon = '📄';
  } else if (randomIndex === 2) {
    selection.name = 'scissors';
    selection.icon = '✂️'
  } else if (randomIndex === 3) {
    selection.name = 'bomb';
    selection.icon = '💣';
  } else if (randomIndex === 4) {
    selection.name = 'wrestler';
    selection.icon = '🤼';
  }
  currentComputerSelection = selection;
}

function fighterPage(gameMode) {
  homeSubHeader.innerText = 'Choose your fighter!';
  fighter.classList.remove('fighter--hidden');
  fighterClassic.classList.add('fighter--margin');
  for (var i = 0; i < homeSelection.length; i++) {
    homeSelection[i].classList.add('home--hidden');
  }
  homeButton.classList.remove('left--hidden');
  if (gameMode === 'advanced') {
    fighterAdvanced.classList.remove('fighter--hidden');
    fighterClassic.classList.remove('fighter--margin');
  }
}

function homePage() {
  homeSubHeader.innerText = 'Choose your game!';
  for (var i = 0; i < homeSelection.length; i++) {
    homeSelection[i].classList.remove('home--hidden');
  }
  fighter.classList.add('fighter--hidden');
  homeButton.classList.add('left--hidden');
  fighterAdvanced.classList.add('fighter--hidden');
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
  } else if (event.target.classList.contains('fighter__bomb')) {
    selection.name = 'bomb';
    selection.icon = '💣';
  } else if (event.target.classList.contains('fighter__wrestler')) {
    selection.name = 'wrestler';
    selection.icon = '🤼';
  }
  currentPlayerSelection = selection;
}

function showdown() {
  setTimeout(function() {
    display([fighterClassic, fighterAdvanced], 'add', 'fighter--hidden');
    display([fighterShowdown, winnerMessage], 'remove', 'fighter--hidden');
    fighterPlayer.innerText = currentPlayerSelection.icon;
    fighterComputer.innerText = currentComputerSelection.icon;
    displayWinnerMessage(createGame(currentPlayerSelection.name, currentComputerSelection.name));
  }, 500)
}

function display(name, addOrRemove, section) {
  for (var i = 0; i < name.length; i++) {
    if (addOrRemove === 'add') {
      name[i].classList.add(section);
    } else {
      name[i].classList.remove(section);
    }
  }
}

function resetGame() {
  setTimeout(function() {
    if (classicOrAdvanced === true) {
      fighterClassic.classList.remove('fighter--hidden');
      fighterShowdown.classList.add('fighter--hidden');
      fighterClassic.classList.add('fighter--margin');
    } else {
      fighterClassic.classList.remove('fighter--hidden');
      fighterShowdown.classList.add('fighter--hidden');
      fighterAdvanced.classList.remove('fighter--hidden');
    }
    winnerMessage.classList.add('fighter--hidden');
  }, 3000)
}

function displayWinner(event) {
  createPlayer(event);
  createComputer();
  showdown(currentPlayerSelection.name, currentComputerSelection.name);
  updateScore();
  resetGame();
}


// Make event listener and function for advanced page.
// See what functions can be made more dynamic to be reused in advanced mode.
