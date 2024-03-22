class Character extends moveableObject {
  height = 200;
  width = 250;
  positionx = 100;
  swimming_sound = new Audio("./audio/swimming.mp3");
  dying_sound = new Audio("./audio/gameOver.mp3")
  IMAGES_IDLE = [
    "../img/1.Sharkie/1.IDLE/2.png",
    "../img/1.Sharkie/1.IDLE/3.png",
    "../img/1.Sharkie/1.IDLE/4.png",
    "../img/1.Sharkie/1.IDLE/5.png",
    "../img/1.Sharkie/1.IDLE/6.png",
    "../img/1.Sharkie/1.IDLE/7.png",
    "../img/1.Sharkie/1.IDLE/8.png",
    "../img/1.Sharkie/1.IDLE/9.png",
    "../img/1.Sharkie/1.IDLE/10.png",
    "../img/1.Sharkie/1.IDLE/11.png",
    "../img/1.Sharkie/1.IDLE/12.png",
    "../img/1.Sharkie/1.IDLE/13.png",
    "../img/1.Sharkie/1.IDLE/14.png",
    "../img/1.Sharkie/1.IDLE/15.png",
    "../img/1.Sharkie/1.IDLE/16.png",
    "../img/1.Sharkie/1.IDLE/17.png",
    "../img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/2.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/4.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_DEAD = [
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png",
  ];
  world;
  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DEAD);
    this.beDead();
    this.animateIdle();
   
  }
  animateIdle() {
    setInterval(() => {
        if (!this.isDead() && !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.UP && !this.world.keyboard.DOWN) { 
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.world.camera_x = -this.positionx + 100;
        }
    }, 100);
}
  animateSwim() {
    let i = this.currentImage % this.IMAGES_SWIM.length; //let I = 0 % 6;
    let path = this.IMAGES_SWIM[i];
    this.img = this.imageChache[path];
    this.currentImage++;
    this.swimming_sound.play();
  }
  animateDead() {
    let i = this.currentImage % this.IMAGES_DEAD.length; //let I = 0 % 6;
    let path = this.IMAGES_DEAD[i];
    this.img = this.imageChache[path];
    this.currentImage++;
  }

  //moveset:

  moveRight() {
    // Intervall for Movement
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT &&
        this.positionx < this.world.level.levelEndPositionX
      ) {
        this.positionx += 5;
        this.otherDirection = false;
        this.world.camera_x = -this.positionx + 100;
      }
    }, 1000 / 60);

    // Intervall for Animation
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.animateSwim();
      }
    }, 300);
  }
  moveLeft() {
    setInterval(() => {
      if (this.world.keyboard.LEFT & (this.positionx > -200)) {
        this.positionx -= 5;
        this.otherDirection = true;
        this.world.camera_x = -this.positionx + 100;
      }
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.LEFT) {
        this.animateSwim();
      }
    }, 300);
  }
  moveUp() {
    setInterval(() => {
      if (this.world.keyboard.UP) {
        this.positiony -= 5;
      }
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.UP) {
        this.animateSwim();
      }
    }, 300);
  }
  moveDown() {
    setInterval(() => {
      if (this.world.keyboard.DOWN) {
        this.positiony += 5;
      }
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.DOWN) {
        this.animateSwim();
      }
    }, 300);
  }

  beDead() {
     setInterval(() => {
      if (this.isDead()) {
        this.animateDead();
        this.dying_sound.play();
        
      }
    }, 200);
  }

}


