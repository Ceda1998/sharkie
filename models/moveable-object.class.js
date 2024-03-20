class moveableObject {
  positionx = 10;
  positiony = 10;
  width;
  height;
  img;
  currentImage = 0;
  imageChache = {};
  speed;
  otherDirection = false;

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
    ctx.drawImage(this.img, this.positionx, this.positiony, this.width, this.height);
  }

  drawFrame(ctx) {
    if(this instanceof Character || this instanceof Pufferfish) {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(this.positionx, this.positiony, this.width, this.height);
    ctx.stroke();
    }
  }

  movementLeft() {
    setInterval(() => {
      this.positionx -= this.speed;
    }, 1000 / 60);
  }
  animateCharacters(images) {
    setInterval(() => {
      let i = this.currentImage % images.length; //let I = 0 % 6;
      let path = images[i];
      this.img = this.imageChache[path];
      this.currentImage++;
    }, 200);
  }
  animateCollectables(images) {
    setInterval(() => {
      let i = this.currentImage % images.length; //let I = 0 % 6;
      let path = images[i];
      this.img = this.imageChache[path];
      this.currentImage++;
    }, 400);
  }
}
