// wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    // add event listener to each button
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") == "submit") {
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
  }

  runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * accept a gameType
 * and after the user's answer has been processed
 */
function runGame(gameType) {
  // create random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else {
    alert(`unknown game type!: ${gameType}`);
    throw `unknown game type: ${gameType}, Aborting!`;
  }
}

/**
 * Check the answer against the first element in
 * the returned calculateCorrectAnswer array
 * continue the game with the same gameType
 */
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer(); // aray that holds the correct answer and the operator for next game
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("Hey! You got it right! :D");
    incrementScore();
  } else {
    alert(
      `Awww... You answered: ${userAnswer}. The correct Answer was ${calculatedAnswer[0]} :(`
    );
    incrementWrongAnswer();
  }

  // continue the game with the same gameType
  runGame(calculatedAnswer[1]);

  //clear the input
  document.getElementById("answer-box").value = "";
}

/**
 * Get operands (the numbers) and the operator directly from the dom
 * return the correct answer
 * return an array that holds the correct answer and the operator for next game
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else {
    alert(`unimplemented operator: ${operator}`);
    throw `unimplemented operator: ${operator}, Aborting!`;
  }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets current tally of on incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}
/**
 *
 * @param {*} operand1 used as first operand in the equation
 * @param {*} operand2 used as second operand in the equation
 * add @param {*} operand1 and @param {*} operand2
 * operand1 and operand2 are displayed in the html
 * operator is set to "+"
 */
function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

/**
 * @param {*} operand1 used as first operand in the equation
 * @param {*} operand2 used as second operand in the equation
 * multiply @param {*} operand1 and @param {*} operand2
 */
function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

//function that student needs to code

function displayDivideQuestion() {}
