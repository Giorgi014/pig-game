const NEW_GAME_BUTTON = document.getElementById("new_game");
const ROLL_BUTTON = document.getElementById("roll");
const HOLD_BUTTON = document.getElementById("hold");
const PLAYER_ONE = document.getElementById("player_one");
const PLAYER_TWO = document.getElementById("player_two");
const PLAYER_ONE_NAME = document.getElementsByClassName("player1");
const PLAYER_TWO_NAME = document.getElementsByClassName("player2");
const LEFT_PLAYER_TOTAL_SCORE = document.getElementById("left_score_number");
const LEFT_PLAYER_SCORE = document.getElementById("left_number");
const RIGHT_PLAYER_TOTAL_SCORE = document.getElementById("rigth_score_number");
const RIGTT_PLAYER_SCORE = document.getElementById("rigth_number");
const DICE_CONTAINER = document.getElementById("dice_container");
const one = document.getElementById("dice_one");
const two = document.getElementById("dice_two");
const three = document.getElementById("dice_three");
const four = document.getElementById("dice_four");
const five = document.getElementById("dice_five");
const six = document.getElementById("dice_six");

const MAX_SCORE = 100;

let NUMBER_ONE = 1;
let NUMBER_TWO = 2;
let NUMBER_THREE = 3;
let NUMBER_FOUR = 4;
let NUMBER_FIVE = 5;
let NUMBER_SIX = 6;

let CURRENT_PLAYER = 1;
let PLAYER_ONE_TOTAL_SCORE = 0;
let PLAYER_TWO_TOTAL_SCORE = 0;
let CURRENT_ROUND_SCORE = 0;

const allNumbers = () => {
  one.value = NUMBER_ONE;
  two.value = NUMBER_TWO;
  three.value = NUMBER_THREE;
  four.value = NUMBER_FOUR;
  five.value = NUMBER_FIVE;
  six.value = NUMBER_SIX;
};

const rendomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const hideAllDice = () => {
  DICE_CONTAINER.style.display = "none";
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "none";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
};

const randomDiceNumber = () => {
  hideAllDice();

  DICE_CONTAINER.style.display = "flex";
  const randomValue = rendomNumber();

  if (randomValue === 1) {
    one.style.display = "flex";
  } else if (randomValue === 2) {
    two.style.display = "flex";
  } else if (randomValue === 3) {
    three.style.display = "flex";
  } else if (randomValue === 4) {
    four.style.display = "flex";
  } else if (randomValue === 5) {
    five.style.display = "flex";
  } else if (randomValue === 6) {
    six.style.display = "flex";
  }
  if (randomValue === 1) {
    CURRENT_ROUND_SCORE = 0;
    switchPlayer();
  } else {
    CURRENT_ROUND_SCORE += randomValue;
  }

  if (CURRENT_PLAYER === 1) {
    LEFT_PLAYER_SCORE.textContent = CURRENT_ROUND_SCORE;
  } else {
    RIGTT_PLAYER_SCORE.textContent = CURRENT_ROUND_SCORE;
  }

  return randomValue;
};

const switchPlayer = () => {
  CURRENT_ROUND_SCORE = 0;
  LEFT_PLAYER_SCORE.textContent = CURRENT_ROUND_SCORE;
  RIGTT_PLAYER_SCORE.textContent = CURRENT_ROUND_SCORE;

  if (CURRENT_PLAYER === 1) {
    CURRENT_PLAYER = 2;
    PLAYER_ONE.style.backgroundColor = "rgb(187, 122, 151)";
    PLAYER_TWO.style.backgroundColor = "rgb(220, 174, 186)";
  } else {
    CURRENT_PLAYER = 1;
    PLAYER_ONE.style.backgroundColor = "rgb(220, 174, 186)";
    PLAYER_TWO.style.backgroundColor = "rgb(187, 122, 151)";
  }
};

const holdGame = () => {
  if (CURRENT_PLAYER === 1) {
    PLAYER_ONE_TOTAL_SCORE += CURRENT_ROUND_SCORE;
    LEFT_PLAYER_TOTAL_SCORE.textContent = PLAYER_ONE_TOTAL_SCORE;
    CURRENT_PLAYER = 2;
    PLAYER_ONE.style.backgroundColor = "rgb(187, 122, 151)";
    PLAYER_TWO.style.backgroundColor = "rgb(220, 174, 186)";
  } else {
    PLAYER_TWO_TOTAL_SCORE += CURRENT_ROUND_SCORE;
    RIGHT_PLAYER_TOTAL_SCORE.textContent = PLAYER_TWO_TOTAL_SCORE;
    CURRENT_PLAYER = 1;
    PLAYER_ONE.style.backgroundColor = "rgb(220, 174, 186)";
    PLAYER_TWO.style.backgroundColor = "rgb(187, 122, 151)";
  }

  CURRENT_ROUND_SCORE = 0;
  LEFT_PLAYER_SCORE.textContent = 0;
  RIGTT_PLAYER_SCORE.textContent = 0;
};

const winner = () => {
  if (PLAYER_ONE_TOTAL_SCORE >= MAX_SCORE) {
    PLAYER_ONE.style.backgroundColor = "black";
    PLAYER_ONE_NAME[0].style.color = "rgb(187, 122, 151)";
    LEFT_PLAYER_TOTAL_SCORE.style.color = "rgb(187, 122, 151)";
    ROLL_BUTTON.disabled = true;
    HOLD_BUTTON.disabled = true;
  }
  if (PLAYER_TWO_TOTAL_SCORE >= MAX_SCORE) {
    PLAYER_TWO.style.backgroundColor = "black";
    PLAYER_TWO_NAME[0].style.color = "rgb(187, 122, 151)";
    RIGHT_PLAYER_TOTAL_SCORE.style.color = "rgb(187, 122, 151)";
    ROLL_BUTTON.disabled = true;
    HOLD_BUTTON.disabled = true;
  }
};

const resetGame = () => {
  CURRENT_ROUND_SCORE = 0;
  PLAYER_ONE_TOTAL_SCORE = 0;
  PLAYER_TWO_TOTAL_SCORE = 0;
  LEFT_PLAYER_TOTAL_SCORE.textContent = 0;
  RIGHT_PLAYER_TOTAL_SCORE.textContent = 0;
  PLAYER_ONE.style.backgroundColor = "";
  PLAYER_ONE_NAME[0].style.color = "";
  LEFT_PLAYER_TOTAL_SCORE.style.color = "";
  PLAYER_TWO.style.backgroundColor = "";
  PLAYER_TWO_NAME[0].style.color = "";
  RIGHT_PLAYER_TOTAL_SCORE.style.color = "";
  ROLL_BUTTON.disabled = false;
  HOLD_BUTTON.disabled = false;
};

ROLL_BUTTON.addEventListener("click", () => {
  const result = randomDiceNumber();
  // randomDiceNumber();
  console.log(result);
  return result;
});

HOLD_BUTTON.addEventListener("click", () => {
  holdGame();
  winner();
});

NEW_GAME_BUTTON.addEventListener("click", () => {
  resetGame();
});
