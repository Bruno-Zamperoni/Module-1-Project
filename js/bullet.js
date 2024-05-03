class bullet{
    constructor(screen, left, top){
        this.screen = screen
        this.left = left - 50;
        this.top = top + 20;
        this.width = 100;
        this.height = 30;

        this.element = document.createElement("img")
        this.element.src = "/Images/shoot.png"
        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.screen.appendChild(this.element)
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
    move(){
        this.left -= 8;
        this.updatePosition();
    }
}