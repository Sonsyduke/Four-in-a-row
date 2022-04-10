const game = new Game();
const beginGame = document.querySelector("#begin-game");

beginGame.addEventListener("click", function () {
  game.startGame();

  this.style.display = "none";
  document.querySelector("#play-area").style.opacity = "1";
});
