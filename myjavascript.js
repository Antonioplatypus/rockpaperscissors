console.log("Hello wORLD !")
let arr = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return (arr[(Math.floor(Math.random() * arr.length))]);
}
console.log(getComputerChoice());

let choice = null;

function getPlayerChoice(){
    next = false;
    do {
        choice = parseInt(prompt("press 1 for Rock 2 for paper 3 for scissors"));
        switch(choice){
        case 1:
            choice = "rock"; next = false;  break;
        case 2:
            choice = "paper"; next = false;  break;
        case 3:
            choice = "scissors"; next = false; break;
        default:
            choice = "invalid"; next = true;
                    }
        }while(next);
    
    return choice;
}

getPlayerChoice();
console.log(getPlayerChoice());