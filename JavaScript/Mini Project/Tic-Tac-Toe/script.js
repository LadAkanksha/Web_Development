let boxes = document.querySelectorAll(".box");

let rstBtn = document.querySelector("#reset");

let winner = document.querySelector(".winner");
let newgamebtn = document.querySelector("#new-game");
let resetbtn = document.querySelector("#reset");
let count = 0;
let turnX = true;
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

///     TO DISABLE BOXES
const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

///     TO ENABLE BOXES
const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        winner.style.display = "none";
        newgamebtn.style.display = "none";
    }
};


///     TO RESET TE GAME
const reset = () => {
    turnX = true;
    enableBoxes();
    winner.style.display = "none";
    newgamebtn.style.display = "none";
    count = 0;
}


///     TO CHECK THE WINNER OF GAME     
const checkWinner = () => {
    for(let pattern of winningPattern)
    {
        // console.log(pattern);
        console.log(pattern[0] , pattern[1] , pattern[2]);
        //console.log(boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]]); 
        console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val == pos2Val && pos2Val == pos3Val)
            {
                console.log("Winner "+pos1Val);
                winner.style.display = "block";
                winner.innerText = "Winner is "+pos1Val;
                newgamebtn.style.display = "block";

                disableBoxes();
            }
            if(count == 9 && (pos1Val != pos2Val && pos2Val != pos3Val))
            {
                winner.style.display = "block";
                winner.innerText = "Game Over !!!\nNo One is Winner";
                newgamebtn.style.display = "block";
                disableBoxes();
            }
        }
    }
};


///     LOGIC FOR TOGGLE THE PLAYER AND CALLING FOR WINNING FUNCTION
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");

        if(turnX)
        {
            box.innerText = "X";
            box.style.color = "rgb(148, 23, 23)";
            turnX = false;
        }
        else
        {
            box.innerText = "O";
            box.style.color = "lightgreen";
            turnX = true;
        }

        box.disabled = true;
        count++;
        checkWinner();
    });
});


///     TO RESET THE GAME WHEN THEY CLICKED RESET BUTTON
newgamebtn.addEventListener("click" , reset);

///     TO RESTART NEW GAME WHEN THEY CLICKED NEW GAME
resetbtn.addEventListener("click" , reset);