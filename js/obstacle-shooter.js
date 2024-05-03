class obstacleShooter{
    constructor(screen){
        this.screen = screen
        this.left = 1200;
        this.top = Math.floor(Math.random() * (500 - 30) + 30);
        this.width = 150;
        this.height = 70;
        this.element = document.createElement("img");
        this.bullets = [];

        this.element.src = "/Images/obstacle-shooter.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.type = 'shooter'
        this.timer = 0;
    
        this.screen.appendChild(this.element);
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
    move(){
        if (this.left > 1150) {
            this.left -= 1;
        }else{
            this.left = 1150;
        }
        this.updatePosition();
    }
    shoot(){
        if(this.bullets.length < 1){
        this.bullets.push('bullet')
        return new bullet(this.screen, this.left, this.top);
        }
    }
}