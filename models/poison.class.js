class Poison extends moveableObject {
  width = 30;
  height = 30;
  IMG_POISON = [
    "../img/4. Marcadores/Posión/Animada/1.png",
    "../img/4. Marcadores/Posión/Animada/2.png",
    "../img/4. Marcadores/Posión/Animada/3.png",
    "../img/4. Marcadores/Posión/Animada/4.png",
    "../img/4. Marcadores/Posión/Animada/5.png",
    "../img/4. Marcadores/Posión/Animada/6.png",
    "../img/4. Marcadores/Posión/Animada/7.png",
  ];
  constructor() {
    super().loadImage(this.IMG_COINS[0]);
    this.loadImages(this.IMG_COINS);
    this.animateCollectables(this.IMG_COINS);
    this.positionx = 500;
  }
}
