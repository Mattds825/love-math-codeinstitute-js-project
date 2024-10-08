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

  document
    .getElementById("answer-box")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });

  runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * accept a gameType
 * and after the user's answer has been processed
 */
function runGame(gameType) {
  //clear the input and focus on it
  document.getElementById("answer-box").value = "";
  document.getElementById("answer-box").focus();

  // create random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === "division") {
    displayDivideQuestion(num1, num2);
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
  } else if (operator === "-") {
    return [operand1 - operand2, "subtract"];
  }
  else if (operator === "/") {
    return [operand1 / operand2, "division"];
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

/**
 *
 * @param {*} operand1
 * @param {*} operand2
 * subtract @param {*} operand1 from @param {*} operand2
 * operator is set to "-"
 */
function displaySubtractQuestion(operand1, operand2) {
  // set the largest number as the first operand
  document.getElementById("operand1").textContent =
    operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent =
    operand1 > operand2 ? operand2 : operand1;
  document.getElementById("operator").textContent = "-";
}

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

/**
 * 
 * @param {*} operand1 
 * @param {*} operand2
 * divide @param {*} operand1 * (@param {*} operand2 * factor) by @param {*} operand2
 * factor is a random number between 1 and 4 
 */
function displayDivideQuestion(operand1, operand2) {
  //create a factor to add to the division
  // keeps divions whole
  let factor = Math.floor(Math.random() * 4) + 1;
  document.getElementById("operand1").textContent = operand1*(operand2*factor);
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "/";
}
