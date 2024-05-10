let score = { Win: 0, Lose: 0, Tie: 0 };

function playGame(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        score.Tie++;
        return "It's a Tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        score.Win++;
        return "You Win!";
    } else {
        score.Lose++;
        return "You Lose!";
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}<br>Wins: ${score.Win}, Losses: ${score.Lose}, Ties: ${score.Tie}`;
}

function resetGame() {
    score.Win = 0;
    score.Lose = 0;
    score.Tie = 0;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Choose Rock, Paper, or Scissors";
}
