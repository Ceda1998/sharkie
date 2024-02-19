class BackgroundObject extends moveableObject {
    height = 1000;
    width = 300;
    
    constructor(imagePath,x,y) {
        super().loadImage(imagePath);
        this.positionx = x;
        this.positiony = y;
    }
}