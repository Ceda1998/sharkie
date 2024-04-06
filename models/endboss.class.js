class Endboss extends moveableObject {
  width = 400;
  height = 500;
  IMG_FLOATING = [
    "../img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "../img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  constructor() {
    super().loadImage(this.IMG_FLOATING[0]);
    this.loadImages(this.IMG_FLOATING);
    this.animateCharacters(this.IMG_FLOATING);
    this.positionx = 3200;
    this.positiony = -50;
  }
}
