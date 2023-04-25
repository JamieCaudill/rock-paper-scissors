// ROCK, PAPER, SCISSORS //

// VARIABLES //

var homeSubHeader = document.querySelector('.home__subheader');
var homeSelection = document.querySelectorAll('.home__selection');
var homeClassicBox = document.querySelector('.home__classic');
var homeAdvancedBox = document.querySelector('.home__advanced');
var homeButton = document.querySelector('.left__home');
var rock = document.querySelector('.fighter__rock');
var paper = document.querySelector('.fighter__paper');
var scissors = document.querySelector('.fighter__scissors');
var fighter = document.querySelector('.fighter');
var fighterClassic = document.querySelector('.fighter__classic');
var fighterAdvanced = document.querySelector('.fighter__advanced');
var fighterMode = document.querySelector('.fighter__mode');
var fighters = document.querySelectorAll('.fighter__fighters');
var fighterShowdown = document.querySelector('.fighter__showdown');
var fighterPlayer = document.querySelector('.fighter__player');
var fighterComputer = document.querySelector('.fighter__computer');
var leftWins = document.querySelector('.left__wins');
var rightWins = document.querySelector('.right__wins');
var winnerMessage = document.querySelector('.fighter__winner');

// DATA MODEL //

var currentComputerSelection = {wins: 0};
var currentPlayerSelection = {wins: 0};
var winConditions = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper'], ['rock', 'wrestler'], ['paper', 'bomb'], ['scissors', 'wrestler'], ['bomb', 'rock'], ['bomb', 'scissors'], ['wrestler', 'paper'], ['wrestler', 'bomb']];
var classicOrAdvanced = true; 

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', function() {
  classicOrAdvanced = true;
  fighterPage();
});

homeAdvancedBox.addEventListener('click', function() {
  classicOrAdvanced = false;
  fighterPage();
});

fighterMode.addEventListener('click', function(event) {
  displayWinner(event);
});

// fighterAdvanced.addEventListener('click', function(event) {
//   displayWinner(event);
// });

homeButton.addEventListener('click', function() {
  homePage();
});



// FUNCTIONS //

// NAVIGATION //

function show (name, section) {
  for (var i = 0; i < name.length; i++) {
    name[i].classList.remove(section);
  }
};

function hide(name, section) {
  for (var i = 0; i < name.length; i++) {
    name[i].classList.add(section);
  }
};

function fighterPage() {
  homeSubHeader.innerText = 'Choose your fighter!';
  hide([homeSelection[0], homeSelection[1]], 'home--hidden');
  show([fighter], 'fighter--hidden');
  show([homeButton], 'left--hidden');
  hide([fighterClassic], 'fighter--margin');
  if (!classicOrAdvanced) {
    show([fighterAdvanced], 'fighter--hidden');
    show([fighterClassic], 'fighter--margin');
  } else {
    hide([fighterAdvanced], 'fighter--hidden');
  }
};

function homePage() {
  homeSubHeader.innerText = 'Choose your game!';
  show([homeSelection[0], homeSelection[1]], 'home--hidden');
  hide([fighter], 'fighter--hidden');
  hide([homeButton], 'left--hidden');
};

// GAMEPLAY //

function getNumOfFighters(gameMode) {
  if (gameMode) {
    var numOfFighters = 3;
  } else {
    numOfFighters = 5;
  }
  return numOfFighters;
};

function createComputer(selection) {
  var numOfFighters = getNumOfFighters(classicOrAdvanced);
  var randomIndex = Math.floor(Math.random() * numOfFighters)
  if (!randomIndex) {
    selection.name = 'rock';
    selection.icon = '🪨';
  } else if (randomIndex === 1) {
    selection.name = 'paper';
    selection.icon = '📄';
  } else if (randomIndex === 2) {
    selection.name = 'scissors';
    selection.icon = '✂️';
  } else if (randomIndex === 3) {
    selection.name = 'bomb';
    selection.icon = '💣';
  } else if (randomIndex === 4) {
    selection.name = 'wrestler';
    selection.icon = '🤼';
  }
};

function createPlayer(event, selection) {
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
};

function createGame(player, computer) {
  if (player === computer) {
    return 'Draw!';
  }
  for (var i = 0; i < winConditions.length; i++) {
    if (player === winConditions[i][0] && computer === winConditions[i][1]) {
      currentPlayerSelection.wins = currentPlayerSelection.wins + 1;
      return `Player wins!`;
    } 
  }
  currentComputerSelection.wins = currentComputerSelection.wins + 1;
  return `Computer wins!`;
};

// DOM //

function displayWinnerMessage(winner) {
  winnerMessage.innerText = winner;
};

function updateScore() {
  leftWins.innerText = 'Wins: ' + currentPlayerSelection.wins;
  rightWins.innerText = 'Wins: ' + currentComputerSelection.wins;
};

function showdown() {
  setTimeout(function() {
    hide([fighterClassic, fighterAdvanced], 'fighter--hidden');
    show([fighterShowdown, winnerMessage], 'fighter--hidden');
    homeSubHeader.innerText = 'Fight!'
    fighterPlayer.innerText = currentPlayerSelection.icon;
    fighterComputer.innerText = currentComputerSelection.icon;
    displayWinnerMessage(createGame(currentPlayerSelection.name, currentComputerSelection.name));
    updateScore();
  }, 500)
};

function resetGame() {
  setTimeout(function() {
    show([fighterClassic], 'fighter--hidden');
    hide([fighterShowdown, winnerMessage], 'fighter--hidden');
    homeSubHeader.innerText = 'Choose your fighter!'
    if (classicOrAdvanced === true) {
      show([fighterClassic], 'fighter--hidden');
      hide([fighterShowdown], 'fighter--hidden');
      hide([fighterClassic], 'fighter--margin');
    } else {
      show([fighterAdvanced], 'fighter--hidden');
    }
  }, 3000)
};

function displayWinner(event) {
  createPlayer(event, currentPlayerSelection);
  createComputer(currentComputerSelection);
  showdown(currentPlayerSelection.name, currentComputerSelection.name);
  resetGame();
};

