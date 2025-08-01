let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let computer = ['rock', 'paper', 'scissors'];

let computerInput = () => {
    const computerResult = computer[Math.floor(Math.random() * computer.length)];
    return computerResult;
}

rock.addEventListener("click", () => {
    let compResult = computerInput();
    calculateResult(compResult, 'rock');
})

paper.addEventListener("click", () => {
    let compResult = computerInput();
    calculateResult(compResult, 'paper');
})

scissors.addEventListener("click", () => {
    let compResult = computerInput();
    calculateResult(compResult, 'scissors');
});


let calculateResult = (compResult, userInput) => {
    if (compResult === userInput) {
        
         msg.style.backgroundColor="#081b31";
        msg.innerText = "It was Draw.";
    } else if (userInput === 'rock' && compResult === 'paper') {
       
        winner(compScore);
        msg.style.backgroundColor="red";
        msg.innerText = "You lost.paper beats rock";
    } else if (userInput === 'paper' && compResult === 'rock') {
       
        winner(userScore);
         msg.style.backgroundColor="green";
        msg.innerText = "You won! paper beats rock";
    }
    else if (userInput === 'paper' && compResult === 'scissors') {
     
        winner(compScore);
         msg.style.backgroundColor="red";
        msg.innerText = "You lost.scissor beats paper";
    } else if (userInput === 'scissors' && compResult === 'paper') {
        
        winner(userScore);
         msg.style.backgroundColor="green";
        msg.innerText = "You won! scissor beats paper";
    }
    else if (userInput === 'scissors' && compResult === 'rock') {
       
        winner(compScore);
         msg.style.backgroundColor="red";
        msg.innerText = "You lost.rock beats scissor";
    } else if (userInput === 'rock' && compResult === 'scissors') {
      
        winner(userScore);
         msg.style.backgroundColor="green";
        msg.innerText = "You won! rock beats scissor";
    }


}

let winner = (winner) => {
    let num = Number(winner.innerText);
    winner.innerText = num + 1;
}