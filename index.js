function play() {
  const hideItem = document.getElementById("Game_font_page");
  const showItem = document.getElementById("Game_Main_page");
  showElimentUseId(showItem);
  hideElimentUseId(hideItem);
  continueGame();
}
// continue Game
function continueGame() {
  const Alphabed = randomAlphabed();
  showAlphabedOnScreen(Alphabed);
  showKeyboardColor(Alphabed);
  // condition
  conditionFunction(Alphabed);
}
// Universal Function
// hide Eliment
function hideElimentUseId(even) {
  even.classList.add("hidden");
}
// Show Eliment
function showElimentUseId(even) {
  even.classList.remove("hidden");
}
// random alphabed
function randomAlphabed() {
  const randomNumber = Math.random() * 25;
  const roundNumber = Math.round(randomNumber);
  const alphabed = "abcdefghijklmnopqrstuvwxyz";
  const alphabedSplied = alphabed.split("");
  const randomAlphabedFind = alphabedSplied[roundNumber];
  return randomAlphabedFind;
}
// // Show Alphabed in Screen
function showAlphabedOnScreen(even) {
  const alphabed = document.getElementById("ShowItem");
  alphabed.innerText = even;
  const changeAlphabed = alphabed.innerText;
  return changeAlphabed;
}
// Show Key Board Color
function showKeyboardColor(even) {
  const findKey = document.getElementById(even);
  findKey.classList.add("text-lime-50");
  findKey.classList.add("bg-red-500");
}
// Remove Key Board Color
function removeKeyboardColor(even) {
  const findKey = document.getElementById(even);
  findKey.classList.remove("text-lime-50");
  findKey.classList.remove("bg-red-500");
}

// Number Plus Show On Screen

function numberPlus() {
  const numberSpan = document.getElementById("number_plus");
  const numbervalue = numberSpan.innerText;
  const number = parseInt(numbervalue);
  numberSpan.innerText = number + 1;
  console.log(numberSpan.innerText);
}

document.addEventListener("keyup", conditionFunction);
function conditionFunction(even) {
  const keyPress = even.key;
  const screenValue = document.getElementById("ShowItem");
  const screenValuetext = screenValue.innerText;
  const screenValuetextLower = screenValuetext.toLowerCase();
  if (keyPress === screenValuetextLower) {
    removeKeyboardColor(keyPress);
    numberPlus();
    return continueGame();
  }
}
