class Coins extends moveableObject {
  width = 30;
  height = 30;
  positionx = 300;
  positiony = 50;
  IMG_COINS = [
    "../img/4. Marcadores/1. Coins/1.png",
    "../img/4. Marcadores/1. Coins/2.png",
    "../img/4. Marcadores/1. Coins/3.png",
    "../img/4. Marcadores/1. Coins/4.png",
  ];
 
  constructor() {
    super().loadImage(this.IMG_COINS[0]);
    this.loadImages(this.IMG_COINS);
    this.animateCollectables(this.IMG_COINS);
    this.positionx = 300 + Math.random() * 500;
    this.positiony = 100 + Math.random() * 300;
  }
 
}
