let result = " ";
let yourGuess = "....";
let computerGuess = "....";
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  draw: 0,
};
document.getElementById(
    "container"
  ).innerHTML = `<p>You <img src="images/rock.png" class="result-img" alt="Rock"> <img src="images/paper.png" class="result-img"  alt="Paper"> Computer</p><p>Win: ${score.win} Lose: ${score.lose} Draw: ${score.draw}</p>`;
function game() {
  // Code for the logic of game
  if (yourGuess == computerGuess) {
    score.draw++;
    result = "It's a Draw!";
  } else if (
    (yourGuess == "rock" && computerGuess == "scissor") ||
    (yourGuess == "paper" && computerGuess == "rock") ||
    (yourGuess == "scissor" && computerGuess == "paper")
  ) {
    score.win++;
    result = "You Win";
  } else {
    score.lose++;
    result = "Computer Wins";
  }
  localStorage.setItem("score", JSON.stringify(score));
  document.getElementById(
    "container"
  ).innerHTML = `<p>You <img src="images/${yourGuess}.png" class="result-img" alt="Rock"> <img src="images/${computerGuess}.png" class="result-img"  alt="Paper"> Computer</p><p>Win: ${score.win} Lose: ${score.lose} Draw: ${score.draw}</p>`;
}
function choice() {
  // Takes the computer choice and returns it
  const random = Math.random();
  if (random >= 0 && random < 1 / 3) {
    computerGuess = "rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerGuess = "paper";
  } else {
    computerGuess = "scissor";
  }
  return computerGuess;
}
document.getElementById("rock").addEventListener("click", function () {
  yourGuess = "rock";
  choice();
  game();
});
document.getElementById("paper").addEventListener("click", function () {
  yourGuess = "paper";
  choice();
  game();
});
document.getElementById("scissor").addEventListener("click", function () {
  yourGuess = "scissor";
  choice();
  game();
});
document.getElementById("reset").addEventListener("click", function () {
  score.win = 0;
  score.lose = 0;
  score.draw = 0;
  localStorage.removeItem("score");
  document.getElementById(
    "container"
  ).innerHTML = `<p>You <img src="images/rock.png" class="result-img" alt="Rock"> <img src="images/paper.png" class="result-img"  alt="Paper"> Computer</p><p>Win: ${score.win} Lose: ${score.lose} Draw: ${score.draw}</p>`;
});