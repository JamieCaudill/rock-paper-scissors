// function for player to select rps.
// function for random selection for computer.
// function for selections to go head to head
// data model to keep track of wins for human, wins for computer, and draws

// function createPlayer(selection) {
//   if (selection === 'rock') {

//   }
// }

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