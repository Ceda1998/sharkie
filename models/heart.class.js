class Heart extends moveableObject {
    width = 50;
    height = 60;
    IMG_HEART = [
      "./img/4. Marcadores/heart/heart.png",
     
    ];
    constructor() {
      super().loadImage(this.IMG_HEART[0]);
      this.loadImages(this.IMG_HEART);
      this.animateCollectables(this.IMG_HEART);
      this.positionx = 400 + Math.random() * 3000;
      this.positiony = 100 + Math.random() * 300;
    }
  }
  