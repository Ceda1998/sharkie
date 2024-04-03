class StatusBar extends DrawableObject {

  IMAGES = [
    "./img/4. Marcadores/green/Life/0_  copia 3.png", //0
    "./img/4. Marcadores/green/Life/20_ copia 4.png",
    "./img/4. Marcadores/green/Life/40_  copia 3.png",
    "./img/4. Marcadores/green/Life/60_  copia 3.png",
    "./img/4. Marcadores/green/Life/80_  copia 3.png",
    "./img/4. Marcadores/green/Life/100_  copia 2.png", //5
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercentage(100);
    this.positionx = 20;
    this.positiony = -20;
    this.width = 250;
    this.height = 70
  }

  //setPercentage(50)
  setPercentage(percentage) {
    this.percentage = percentage; // -> 0.....5 ermitteln
    let path = this.IMAGES[this.resolveImageIndex()]
    this.img = this.imageChache[path];

  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
