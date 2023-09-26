let choice = null;
let selected = 0;
const Rockbtn = document.querySelector("#rockPicked");
const Paperbtn = document.querySelector("#paperPicked");
const Scissorsbtn = document.querySelector("#scissorsPicked");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let PLAYERscore = 0; document.getElementById("playerScore").innerHTML = PLAYERscore;
let COMPUTERscore = 0; document.getElementById("computerScore").innerHTML = COMPUTERscore;


        let arr = ["Rock", "Paper", "Scissors"];
        function getComputerChoice(){ return (arr[(Math.floor(Math.random() * arr.length))]); }
        
        let theComputerChoice = getComputerChoice();

        Rockbtn.addEventListener("click", (e) => {
                choice = "Rock"; theComputerChoice = getComputerChoice(); pickedRock(theComputerChoice);
                });
        Paperbtn.addEventListener("click", (e) => {
                choice = "Paper";  theComputerChoice = getComputerChoice(); pickedPaper(theComputerChoice);
                });
        Scissorsbtn.addEventListener("click", (e) => {
                choice = "Rock"; theComputerChoice = getComputerChoice(); pickedScissors(theComputerChoice);
                });

        function pickedRock(computersChoice){
            if (computersChoice == "Rock") { console.log("You tied, Rock ties with Rock"); document.getElementById("playerEmoji").innerHTML = "✊"; document.getElementById("computerEmoji").innerHTML = "✊"; }
            else if (computersChoice == "Paper") { console.log("You lost, Rock loses to Paper"); COMPUTERscore ++; document.getElementById("computerScore").innerHTML = COMPUTERscore; document.getElementById("playerEmoji").innerHTML = "✊"; document.getElementById("computerEmoji").innerHTML = "🖐️"; }
            else if (computersChoice == "Scissors") {console.log("You won, Rock beats Scissors"); PLAYERscore ++; document.getElementById("playerScore").innerHTML = PLAYERscore; document.getElementById("playerEmoji").innerHTML = "✊"; document.getElementById("computerEmoji").innerHTML = "✌️";}
                                            }

        function pickedScissors(computersChoice){
            if (computersChoice == "Rock") {console.log("You lost, Scissors loses to Rock"); COMPUTERscore ++; document.getElementById("computerScore").innerHTML = COMPUTERscore;document.getElementById("playerEmoji").innerHTML = "✌️"; document.getElementById("computerEmoji").innerHTML = "✊";}
            else if (computersChoice == "Paper") {console.log("You won, Scissors beats Paper"); PLAYERscore ++; document.getElementById("playerScore").innerHTML = PLAYERscore; document.getElementById("playerEmoji").innerHTML = "✌️"; document.getElementById("computerEmoji").innerHTML = "🖐️";  }  
            else if (computersChoice == "Scissors") {console.log("You tied, Scissors ties with Scissors"); document.getElementById("playerEmoji").innerHTML = "✌️"; document.getElementById("computerEmoji").innerHTML = "✌️"; }
                                                }

        function pickedPaper(computersChoice){
            if (computersChoice == "Rock") {console.log("You won, Paper beats Rock"); PLAYERscore ++; document.getElementById("playerScore").innerHTML = PLAYERscore; document.getElementById("playerEmoji").innerHTML = "🖐️";document.getElementById("computerEmoji").innerHTML = "✊"; }
            else if (computersChoice == "Paper") { console.log("You tied, Paper ties with Paper"); document.getElementById("playerEmoji").innerHTML = "🖐️"; document.getElementById("computerEmoji").innerHTML = "🖐️"; }
            else if (computersChoice == "Scissors") {console.log("You lost, Paper loses to Scissors"); COMPUTERscore ++; document.getElementById("computerScore").innerHTML = COMPUTERscore; document.getElementById("playerEmoji").innerHTML = "🖐️"; document.getElementById("computerEmoji").innerHTML = "✌️"; }
                                            }

function rematch(){
    let answer = parseInt(prompt("press 1 for rematch 2 for ending"));
    if (answer == 1){
        game();
    }
    else console.log("Finished");
}