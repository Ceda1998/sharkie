class ShootableObject extends moveableObject {

 width = 50;
 height = 50;
 speed = 8;
    constructor(positionx, positiony) {
        super().loadImage("./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.positionx = positionx;
        this.positiony = positiony;
        this.shooting();
    }
    
    shooting() {
        setInterval(() => {
            this.positionx += this.speed;
        },1000 / 60);
        
    }
}