//Scores
let userScore = 0;
let compScore = 0;

//Get Computer Choice
let computerChoice = () => {
    let compSelection = Math.floor(Math.random() * 3);

    if (compSelection === 0) {
        return "rock";
    } else if (compSelection === 1) {
        return "paper";
    } else {
        return 'scissors';
    }
}


//Get Users Choice
//let userChoice = 'rock';
function userChoice() {
	let input = prompt(`Pick either, Rock, Paper, or Scissors!`);
    let userInput = input.toLowerCase();
    return userInput;
}

//Play a single round of rock, paper, scissors
function singleRound(comp, user) {
    if (comp === user) {
        return `Tie Game! ${user} = ${comp}`;
    } else if (comp === "rock") {
        if (user === "paper") {
            userScore++
            return `You win! ${user} beats ${comp}`;

        } else {
            compScore++
            return `You lose! ${comp} beats ${user}`;

        }
    } else if (comp === "paper") {
        if (user === "scissors") {
            userScore++
            return `You win! ${user} beats ${comp}`;

        } else {
            compScore++
            return `You lose! ${comp} beats ${user}`;

        }
    } else if (comp === "scissors") {
        if (user === "rock") {
            userScore++
            return `You win! ${user} beats ${comp}`;

        } else {
            compScore++
            return `You lose! ${comp} beats ${user}`;

        }
    }
}


function playRound() {

    let playerInput = userChoice();
    let compInput = computerChoice();
    let roundResult = singleRound(compInput, playerInput);
    console.log(`Users choice --${playerInput}`);
    console.log(`Computer choice --${compInput}`);
    console.log(roundResult);
    console.log(`UserScore: ${userScore}`)
    console.log(`CompScore: ${compScore}`)
    console.log(`------------------------`);

}

//playRound();

function game() {
    for (let i = 0; i < 5; i++)
        playRound();
}

game();
