class Barrier extends moveableObject {
    height = 480;
    width = 300;
    constructor() {
        super().loadImage('../img/3. Background/Barrier/1.png')
        this.positionx = 150+ Math.random() * 300;
        this.positiony = 0;
    }
}