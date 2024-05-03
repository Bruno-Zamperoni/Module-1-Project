const game = new Game();
window.onload = function () {
  const startButton = document.getElementById("start");
  const loserRestartButton = document.getElementById("loser-restart-button");
  const winnerRestartButton = document.getElementById("winner-restart-button");
  function spaceDown(event) {
    const key = event.key;
    if (key === " ") {
      game.player.directionY = -2;
    }
  }
  function spaceUp(event) {
    const key = event.key;
    if (key === " ") {
      game.player.directionY = 2;
    }
  }
  window.addEventListener("keydown", spaceDown);
  window.addEventListener("keyup", spaceUp);

  startButton.addEventListener("click", function () {
    startGame();
  });
  function startGame() {
    console.log("start game");
    game.start();
  }
  loserRestartButton.addEventListener("click", function () {
    location.reload();
  });
  winnerRestartButton.addEventListener("click", function () {
    location.reload();
  });
};
