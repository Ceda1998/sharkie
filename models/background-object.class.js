class BackgroundObject extends moveableObject {
    width = 720;
    height = 400;
    
    constructor(imagePath,x,y) {
        super().loadImage(imagePath);
        this.positionx = x;
        this.positiony = y;
    }
}