let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const msgWinner = document.querySelector (".msg-winner");
const msgW = document.querySelector ("#msg-w");
const resetB = document.querySelector("#new-b");

const drawGame = () => {
    
    msg.innerText = "Draw!, Play Again";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    console.log("Your Choice = ",userChoice);
    const compChoice = genChomChoice();
    console.log("Com Choice =",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `You lose!, ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}
 

const genChomChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

    choices.forEach((choice) => {
       
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            
            playGame(userChoice);
        });
    });
 