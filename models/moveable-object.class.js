class moveableObject extends DrawableObject {
  speed;
  health = 100;
  lastHit = 0;
  poisonBottles = 0;
  coins = 0;
  otherDirection = false;
  getDamage_sound = new Audio("./audio/getDamage.mp3");

  
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
      setTimeout(() => {
        this.stopGame();
      }, 1000);
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  getCoins() {
    this.coins += 5;
    if(this.coins >= 100) {
      this.coins = 100;
    }
    console.log(this.coins);
  }

  getPoison() {
    this.poisonBottles += 21;
    if(this.poisonBottles >= 100) {
      this.poisonBottles = 100;
    }
    console.log(this.poisonBottles);
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; //difference in ms
    timepassed = timepassed / 1000; //difference in seconds
    return timepassed < 1; //get hit in last 5 sec.
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
  stopGame() {
    clearAllIntervals();
  }

}
