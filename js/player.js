class Player {
  constructor(screen, top, width, heigth, imgsrc) {
    this.screen = screen;
    this.top = top;
    this.width = width;
    this.heigth = heigth;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgsrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${heigth}px`;
    this.element.style.top = `${top}px`;
    this.screen.appendChild(this.element);
  }
  move() {
    this.top += this.directionY;
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.top > this.screen.offsetHeight - this.heigth - 10) {
      this.top = this.screen.offsetHeight - this.heigth - 10;
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
  didReceivedBullet(bullet) {
    const playerRect = this.element.getBoundingClientRect();
    const bulletRect = bullet.element.getBoundingClientRect();
    if (
      playerRect.left < bulletRect.right &&
      playerRect.right > bulletRect.left &&
      playerRect.top < bulletRect.bottom &&
      playerRect.bottom > bulletRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
