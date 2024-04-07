class DrawableObject {
    img;
    currentImage = 0;
    imageChache = {};
    positionx = 10;
    positiony = 10;
    width;
    height;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
      }
    
      loadImages(arr) {
        arr.forEach((path) => {
          let img = new Image();
          img.src = path;
          this.imageChache[path] = img;
        });
      }
    
      draw(ctx) {
        ctx.drawImage(
          this.img,
          this.positionx,
          this.positiony,
          this.width,
          this.height
        );
      }

      drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish) {
          ctx.beginPath();
          ctx.lineWidth = "5";
          ctx.strokeStyle = "blue";
          ctx.rect(this.positionx, this.positiony, this.width -30, this.height -20);
          ctx.stroke();
        }
      }
    
}