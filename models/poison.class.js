class Poison extends moveableObject {
  width = 50;
  height = 60;
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
    super().loadImage(this.IMG_POISON[0]);
    this.loadImages(this.IMG_POISON);
    this.animateCollectables(this.IMG_POISON);
    this.positionx = 300 + Math.random() * 500;
    this.positiony = 100 + Math.random() * 300;
  }
}
