class Pufferfish extends moveableObject {
    width = 80;
    height = 80;
    constructor() {
        super().loadImage('../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')

        this.positionx = 200 + Math.random() * 500;
        this.positiony = 100 + Math.random() * 300;
    }
}