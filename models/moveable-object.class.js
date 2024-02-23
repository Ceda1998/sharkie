class moveableObject {
    positionx = 10;
    positiony = 10;
    width;
    height;
    img;
    currentImage = 0;
    imageChache = {};
    speed;

   
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });
      
    }

    movementLeft() {
        setInterval(() => {
            this.positionx -= this.speed;
        }, 1000/60);
    }
}