class moveableObject {
  positionx = 10;
  positiony = 10;
  width;
  height;
  img;
  currentImage = 0;
  imageChache = {};
  speed;
  health = 100;
  poisonBottles = 0;
  coins = 0;
  otherDirection = false;
  getDamage_sound = new Audio("./audio/getDamage.mp3");

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
      ctx.rect(this.positionx, this.positiony, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding(obj) {
    return (
      this.positionx + this.width >= obj.positionx &&
      this.positionx <= obj.positionx + obj.width &&
      this.positiony + this.positiony + this.height >= obj.positiony &&
      this.positiony + this.positiony <= obj.positiony + obj.height
    );
  }
  getDamage() {
    
    this.health -= 5;
    this.getDamage_sound.play();
    if(this.health < 0) {
      this.health = 0;
    }
  }

  isDead() {
      return this.health == 0;
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
