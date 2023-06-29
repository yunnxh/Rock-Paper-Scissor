const options = ["Rock", "Paper", "Scissor"];

const title = document.getElementById("title");
const myMove = document.getElementById("myMove");
const computerChoose = document.getElementById("computerMove");

const randomNumber = Math.floor(Math.random(2));
console.log(randomNumber);

function handleChoose(option) {
  const randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  let computerMove = "";
  computerMove = options[randomNumber];

  myMove.innerHTML = "You played " + option;
  computerChoose.innerHTML = "Computer played " + computerMove;

  if (option === computerMove) {
    title.innerHTML = "Draw !";
  } else if (
    (option === "Rock" && computerMove === "Paper") ||
    (option === "Paper" && computerMove === "Scissor") ||
    (option === "Scissor" && computerMove === "Rock")
  ) {
    title.innerHTML = "Defeat !";
  } else {
    title.innerHTML = "Win !  ";
  }
  console.log(option, randomNumber);
}
