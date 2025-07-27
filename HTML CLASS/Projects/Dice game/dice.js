//Player Name
let player1 = "Player1";
let player2 = "Player2";

function editNames() {
  player1 = prompt("Change player1 Name");
  player2 = prompt("Change player2 Name");

  if (player1.length < 1 || player2.length < 1) {
    alert("Please enter valid name 'Douche Bag 😈'");
    return;
  }
  document.querySelector("p.player1").innerHTML = player1;
  document.querySelector("p.player2").innerHTML = player2;
}

function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  diceNum1.setAttribute("src", "/ASSETS/Image/diceroll.gif");
  diceNum2.setAttribute("src", "/ASSETS/Image/diceroll.gif");

  let result = document.querySelector("legend");
  setTimeout(() => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    diceNum1.setAttribute("src", "/ASSETS/Image/dice" + randomNumber1 + ".png");
    diceNum2.setAttribute("src", "/ASSETS/Image/dice" + randomNumber2 + ".png");

    //determine the winner
    if (randomNumber1 === randomNumber2) {
      result.innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      result.innerHTML = player2 + " WINS!";
    } else {
      result.innerHTML = player1 + " WINS!";
    }
  }, 2500);
}