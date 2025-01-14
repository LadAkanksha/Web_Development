let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const opt = ["rock","paper","scissor"];

    let idx = Math.floor(Math.random() * 3);

    return opt[idx];
};

const drawGame =() =>{
    console.log("Game is Draw");
    msg.innerText = "Game is Draw.Play Again";
    msg.style.background = "black";
};

const showWinner = (userWin,userChoice , compChoice) => {
    if(userWin)
    {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }
    else
    {
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "rgb(226, 4, 4)";

    }
};
const playGame = (userChoice) =>{
    console.log("User choice is ",userChoice);

    ////    Computer choice

    const compChoice = genCompChoice();

    console.log("Computer choice is ",compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;

        if( userChoice === "rock")
        {
            /// comp -  paper / scissor
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //  Comp -  rock/scissor
            userWin = compChoice == "scissor" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ?false : true;
        }
        
    showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})