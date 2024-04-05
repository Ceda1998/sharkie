class Pufferfish extends moveableObject {
  width = 80;
  height = 80;
  IMG_IDLE = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  constructor() {
    super().loadImage(
      "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.loadImages(this.IMG_IDLE);
    this.animateSwim();
    this.positionx = 500 + Math.random() * 3000;
    this.positiony = 100 + Math.random() * 300;
    this.speed = 0.2 + Math.random() * 0.25; //random speed
    this.movementLeft();
  }
  animateSwim() {
    setInterval(() => {
      let i = this.currentImage % this.IMG_IDLE.length; //let I = 0 % 6;
      let path = this.IMG_IDLE[i];
      this.img = this.imageChache[path];
      this.currentImage++;
    }, 150);
  }

}
