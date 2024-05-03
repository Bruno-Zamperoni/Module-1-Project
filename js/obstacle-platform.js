class obstaclePlatform {
  constructor(screen) {
    this.screen = screen;
    this.left = 1200;
    this.top = Math.floor(Math.random() * (500 - 30) + 30);
    this.width = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    this.height = 70;
    this.element = document.createElement("img");

    this.element.src = "/Images/Obstacle-platform.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.type = "platform";
    this.screen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    this.left -= 3;
    this.updatePosition();
  }
}
