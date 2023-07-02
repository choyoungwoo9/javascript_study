const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINs = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const add = (a, b) => a + b;
const add2 = function (a, b) {
  return a + b;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINs
    : RESULT_PLAYER_WINs;

//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINs;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice, playerSelection);
  }
  let message = `You pickes ${
    playerSelection || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw';
  } else if (winner === RESULT_PLAYER_WINs) {
    message = message + 'won';
  } else {
    message = message + 'lost';
  }
  alert(message);
  gameIsRunning = false;
});

//not related to game
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'SUM') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

// const subtractUp = function(resultHandler, ...numbers){
//   let sum = 0;
//   for(const num of numbers){ //dont use that
//     sum -= num;
//   }
//   resultHandler(sum, "The result after adding all number is"));
// }

showResult.

combine(
  showResult.bind(this, 'The result after adding all number is:'),
  'ADD',
  1,
  3,
  5,
  7
);
combine(
  showResult.bind(this, 'The result after subtracting all number is:'),
  'SUBTRACT',
  1,
  3,
  5,
  7
);
