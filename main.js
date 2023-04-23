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
var fighters = document.querySelectorAll('.fighter__fighters');
var fighterShowdown = document.querySelector('.fighter__showdown');
var fighterPlayer = document.querySelector('.fighter__player');
var fighterComputer = document.querySelector('.fighter__computer');
var leftWins = document.querySelector('.left__wins');
var rightWins = document.querySelector('.right__wins');
var winnerMessage = document.querySelector('.fighter__winner');

// DATA MODEL //

var computerWins = 0;
var playerWins = 0;
var currentComputerSelection = {};
var currentPlayerSelection = {};
var winConditions = [['rock', 'scissors'], ['paper', 'rock'], ['scissors', 'paper'], ['rock', 'wrestler'], ['paper', 'bomb'], ['scissors', 'wrestler'], ['bomb', 'rock'], ['bomb', 'scissors'], ['wrestler', 'paper'], ['wrestler', 'bomb']];
var classicOrAdvanced = true; 

// EVENT LISTENERS //

homeClassicBox.addEventListener('click', function() {
  fighterPage();
  classicOrAdvanced = true;
});

homeAdvancedBox.addEventListener('click', function() {
  fighterPage('advanced');
  classicOrAdvanced = false;
});

fighter.addEventListener('click', function(event) {
  displayWinner(event);
});

homeButton.addEventListener('click', function() {
  homePage();
});


// FUNCTIONS //

// NAVIGATION //

function display(name, addOrRemove, section) {
  for (var i = 0; i < name.length; i++) {
    if (addOrRemove === 'add') {
      name[i].classList.add(section);
    } else {
      name[i].classList.remove(section);
    }
  }
};

function fighterPage(gameMode) {
  homeSubHeader.innerText = 'Choose your fighter!';
  display([homeSelection[0], homeSelection[1]], 'add', 'home--hidden');
  display([fighter], 'remove', 'fighter--hidden');
  display([homeButton], 'remove', 'left--hidden');
  display(fighterClassic, 'add', 'fighter--margin');
  if (gameMode === 'advanced') {
    display([fighterAdvanced], 'remove', 'fighter--hidden');
    display([fighterClassic], 'remove', 'fighter--margin');
  }
};

function homePage() {
  homeSubHeader.innerText = 'Choose your game!';
  display([homeSelection[0], homeSelection[1]], 'remove', 'home--hidden');
  display([fighter], 'add', 'fighter--hidden');
  display([homeButton], 'add', 'left--hidden');
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

function createComputer() {
  var numOfFighters = getNumOfFighters(classicOrAdvanced);
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
    selection.icon = '✂️';
  } else if (randomIndex === 3) {
    selection.name = 'bomb';
    selection.icon = '💣';
  } else if (randomIndex === 4) {
    selection.name = 'wrestler';
    selection.icon = '🤼';
  }
  return selection;
};

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
  return selection;
};

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
};

// UPDATE DOM //

function displayWinnerMessage(winner) {
  winnerMessage.innerText = winner;
};

function updateScore() {
  leftWins.innerText = 'Wins: ' + playerWins;
  rightWins.innerText = 'Wins: ' + computerWins;
};


function showdown() {
  setTimeout(function() {
    display([fighterClassic, fighterAdvanced], 'add', 'fighter--hidden');
    display([fighterShowdown, winnerMessage], 'remove', 'fighter--hidden');
    fighterPlayer.innerText = currentPlayerSelection.icon;
    fighterComputer.innerText = currentComputerSelection.icon;
    displayWinnerMessage(createGame(currentPlayerSelection.name, currentComputerSelection.name));
    updateScore();
  }, 500)
};

function resetGame() {
  setTimeout(function() {
    display([fighterClassic], 'remove', 'fighter--hidden');
    display([fighterShowdown, winnerMessage], 'add', 'fighter--hidden');
    if (classicOrAdvanced === true) {
      display([fighterClassic], 'remove', 'fighter--hidden');
      display([fighterShowdown], 'add', 'fighter--hidden');
      display([fighterClassic], 'add', 'fighter--margin');
    } else {
      display([fighterAdvanced], 'remove', 'fighter--hidden');
    }
  }, 3000)
};

function displayWinner(event) {
  currentPlayerSelection = createPlayer(event);
  currentComputerSelection = createComputer();
  showdown(currentPlayerSelection.name, currentComputerSelection.name);
  resetGame();
};

