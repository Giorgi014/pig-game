const NEW_GAME_BUTTON = document.getElementById("new_game");
const ROLL_BUTTON = document.getElementById("roll");
const HOLD_BUTTON = document.getElementById("hold");
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

let NUMBER_ONE = 1;
let NUMBER_TWO = 2;
let NUMBER_THREE = 3;
let NUMBER_FOUR = 4;
let NUMBER_FIVE = 5;
let NUMBER_SIX = 6;

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

ROLL_BUTTON.addEventListener("click", () => {
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

  LEFT_PLAYER_SCORE.textContent = randomValue;
  RIGTT_PLAYER_SCORE.textContent = randomValue;

  console.log(randomValue);
});
