class ShootableObject extends moveableObject {

 width = 50;
 height = 50;
 speed = 8;
    constructor() {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.positionx = 100;
        this.positiony = 100;
        this.shooting(100,150);
    }
    
    shooting(positionx, positiony) {
        this.positionx = positionx;
        this.positiony = positiony;
        setInterval(() => {
            this.positionx += this.speed;
        },1000 / 60);
        
    }
}