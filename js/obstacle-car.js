class obstacleCar{
    constructor(screen){
        this.screen = screen
        this.left = 1200;
        this.top = 530;
        this.width = 150;
        this.height = 80;
        this.element = document.createElement("img");

        this.element.src = "/Images/obstacle-car.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.type = 'car'
    
        this.screen.appendChild(this.element);
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
    move(){
        this.left -= 6;
        this.updatePosition();
    }
}