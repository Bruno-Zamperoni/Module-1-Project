class Game {
  constructor() {
    this.startsScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameLoser = document.querySelector("#loser-screen");
    this.gameWinner = document.querySelector("#winner-screen");
    this.player = new Player(
      this.gameScreen,
      400,
      100,
      100,
      "/Images/Player.png"
    );
    this.heigth = 600;
    this.width = 100;
    this.obstacles = [];
    this.bullets = [];
    this.boss = [];
    this.score = 0;
    this.gameIsOver = false;
    this.counter = 0;
    this.gameIntervalId;
    this.gameLoopFrecuency = Math.round(1000 / 60);
  }
  start() {
    this.gameScreen.style.heigth = `${this.heigth}px`;
    this.gameScreen.style.width = `${this.width}%`;

    this.startsScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrecuency);
  }
  gameLoop() {
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.counter++;
    this.player.move();
    if (Math.random() > 0.98 && this.obstacles.length < 4) {
      this.obstacles.push(new obstaclePlatform(this.gameScreen));
    }
    if (Math.random() > 0.98 && this.obstacles.length < 4) {
      this.obstacles.push(new obstacleShip(this.gameScreen));
    }
    if (Math.random() > 0.98 && this.obstacles.length < 4) {
      this.obstacles.push(new obstacleCar(this.gameScreen));
    }
    if (Math.random() > 0.98 && this.obstacles.length < 4) {
      this.obstacles.push(new obstacleShooter(this.gameScreen));
    }
    this.obstacles.forEach((obstacle, index) => {
      if (obstacle.type === "shooter") {
        obstacle.move();
        obstacle.timer++;
        const bullet = obstacle.shoot();
        if (bullet) {
          this.bullets.push(bullet);
        }
        if (obstacle.timer === 200) {
          obstacle.element.remove();
          this.obstacles.splice(index, 1);
        }
      } else {
        obstacle.move();
        if (this.player.didCollide(obstacle)) {
          obstacle.element.remove();
          this.obstacles.splice(index, 1);

          this.gameScreen.style.display = "none";
          this.gameLoser.style.display = "flex";
        }
        if (obstacle.left < this.width - 100) {
          this.score++;
          obstacle.element.remove();
          this.obstacles.splice(index, 1);
          const scoreCounter =
            this.gameScreen.parentElement.querySelector("#score");
          scoreCounter.innerText = this.score;
        }
      }
    });
    if (this.bullets) {
     
      this.bullets.forEach((bullet, index) => {
        console.log(this.bullets)
        bullet.move();
        if (bullet.left < this.width - 100) {
          this.score++;
          bullet.element.remove();
          this.bullets.splice(index, 1);
          const scoreCounter =
            this.gameScreen.parentElement.querySelector("#score");
          scoreCounter.innerText = this.score;
        }
        if (this.player.didReceivedBullet(bullet)) {
          bullet.element.remove();
          this.bullets.splice(index, 1);

          this.gameScreen.style.display = "none";
          this.gameLoser.style.display = "flex";
        }
      });
    }
    if (this.score == 30) {
      this.gameScreen.style.display = "none";
      this.gameWinner.style.display = "flex";
    }
    
  }
}
