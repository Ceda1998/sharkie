class Character extends moveableObject {
  height = 200;
  width = 250;
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
  world;
  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.animateIdle();
  }

  animateIdle() {
    setInterval(() => {
      if (this.world.keyboard.LEFT) {
        let i = this.currentImage % this.IMAGES_IDLE.length; //let I = 0 % 6;
        let path = this.IMAGES_IDLE[i];
        this.img = this.imageChache[path];
        this.currentImage++;
      }
    }, 300);
  }

  moveRight() {
   setInterval(() => {
    if (this.world.keyboard.RIGHT) {
        console.log("right");
        this.positionx += 20;
      }
   }, 100);
  }
  moveLeft() {
    setInterval(() => {
     if (this.world.keyboard.LEFT) {
         this.positionx -= 20;
       }
    }, 100);
   }
   moveUp() {
    setInterval(() => {
     if (this.world.keyboard.UP) {
         this.positiony -= 20;
       }
    }, 100);
   }
   moveDown() {
    setInterval(() => {
     if (this.world.keyboard.DOWN) {
         this.positiony += 20;
       }
    }, 100);
   }
}

