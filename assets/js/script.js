// wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        // add event listener to each button
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")=="submit"){
                alert("you've clicked submit");
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`you've clicked ${gameType}`);
            }
        });
    }
});
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    // create random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}


function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

//function that student needs to code 

function displayDivideQuestion(){

}