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
  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/2.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/4.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];
  world;
  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SWIM);
    this.animateIdle();
  }

  animateIdle() {
    setInterval(() => {
      if (
        !this.world.keyboard.LEFT &&
        !this.world.keyboard.RIGHT &&
        !this.world.keyboard.UP &&
        !this.world.keyboard.DOWN
      ) {
        let i = this.currentImage % this.IMAGES_IDLE.length; //let I = 0 % 6;
        let path = this.IMAGES_IDLE[i];
        this.img = this.imageChache[path];
        this.currentImage++;
      }
    }, 250);
  }
  animateSwim() {
    
      let i = this.currentImage % this.IMAGES_SWIM.length; //let I = 0 % 6;
      let path = this.IMAGES_SWIM[i];
      this.img = this.imageChache[path];
      this.currentImage++;
    
  }
  
  moveRight() {
    // Intervall for Movement
    setInterval(() => {
        if (this.world.keyboard.RIGHT) {
            this.positionx += 5;
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
      if (this.world.keyboard.LEFT) {
        this.positionx -= 5;
      }
    }, 1000 / 60);
  }
  moveUp() {
    setInterval(() => {
      if (this.world.keyboard.UP) {
        this.positiony -= 5;
      }
    }, 1000 / 60);
  }
  moveDown() {
    setInterval(() => {
      if (this.world.keyboard.DOWN) {
        this.positiony += 5;
      }
    }, 1000 / 60);
  }
}
