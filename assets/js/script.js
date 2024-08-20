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

function runGame(){
    
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