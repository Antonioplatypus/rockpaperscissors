console.log("Hello wORLD !")
let arr = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return (arr[(Math.floor(Math.random() * arr.length))]);
}

let theComputerChoice = getComputerChoice();
console.log(theComputerChoice);

let choice = null;

function getPlayerChoice(){
    next = false;
    do {
        choice = parseInt(prompt("press 1 for Rock 2 for Paper 3 for Scissors"));
        switch(choice){
        case 1:
            choice = "Rock"; next = false;  break;
        case 2:
            choice = "Paper"; next = false;  break;
        case 3:
            choice = "Scissors"; next = false; break;
        default:
            choice = "invalid"; next = true;
                    }
        }while(next);
    
    return choice;
}

choice = getPlayerChoice();
console.log(choice);

function pickedRock(computersChoice){
    if (computersChoice == "Rock") console.log("You tied, Rock ties with Rock");
    else if (computersChoice == "Paper") console.log("You lost, Rock loses to Paper");
    else if (computersChoice == "Scissors") console.log("You won, Rock beats Scissors");
}

function pickedScissors(computersChoice){
    if (computersChoice == "Rock") console.log("You lost, Scissors loses to Rock");
    else if (computersChoice == "Paper") console.log("You won, Scissors beats Paper");
    else if (computersChoice == "Scissors") console.log("You tied, Scissors ties with Scissors");
}

function pickedPaper(computersChoice){
    if (computersChoice == "Rock") console.log("You won, Paper beats Rock");
    else if (computersChoice == "Paper") console.log("You tied, Paper ties with Paper");
    else if (computersChoice == "Scissors") console.log("You lost, Paper loses to Scissors");
}

function playRound(playersChoice, computersChoice)
    {
        if (playersChoice == "Rock") console.log(pickedRock(computersChoice));
        else if (playersChoice == "Paper") console.log(pickedPaper(computersChoice));
        else if (playersChoice == "Scissors") console.log(pickedScissors(computersChoice));
        else console.log("wrong");
    }

console.log(playRound(choice,theComputerChoice));