let userScore = 0;
let computerScore = 0;
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");
const msg = document.querySelector("#msg");
const userScoreParagraph = document.querySelector("#user-score");
const compScoreParagraph = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");

const genComputerChoices = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);  //need 0 to 2 range so take 1 extra digit
    return options[randomIndx];
}

const drawgame = () => {
    msg.innerHTML = "Match Draw! Play Again.";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoise, computerChoice) => {
    if (userWin) {
        userScore++;
        userScoreParagraph.innerText = userScore;
        msg.innerHTML = `User Win! Your ${userChoise} beats Computer ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScoreParagraph.innerText = computerScore;
        msg.innerHTML = `Computer Win! Computer ${computerChoice} beats Your ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoise) => {
    console.log(`User Choice : ${userChoise}`);

    // Generate computer choice 
    const computerChoice = genComputerChoices();
    console.log(`Computer Choice :  ${computerChoice}`);

    if (userChoise === computerChoice) {
        //Draw game
        drawgame();
    } else {
        let userWin = true;
        if (userChoise === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoise === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoise, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    })
});