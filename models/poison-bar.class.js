class PoisonBar extends DrawableObject {

    IMAGES_POISONBAR = [
      "./img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png", //0
      "./img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png",
      "./img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png",
      "./img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png", //5
    ];
  
    percentagePoison = 100;
  
    constructor() {
      super();
      this.loadImages(this.IMAGES_POISONBAR);
      this.setPercentagePoison(100);
      this.positionx = 20;
      this.positiony = 70;
      this.width = 250;
      this.height = 70
    }
  
    //setPercentage(50)
    setPercentagePoison(percentagePoison) {
      this.percentagePoison = percentagePoison; // -> 0.....5 ermitteln
      let path = this.IMAGES_POISONBAR[this.resolveImageIndexPoison()]
      this.img = this.imageChache[path];
  
    }
  
    resolveImageIndexPoison() {
      if (this.percentagePoison == 100) {
        return 5;
      } else if (this.percentagePoison > 80) {
        return 4;
      } else if (this.percentagePoison > 60) {
        return 3;
      } else if (this.percentagePoison > 40) {
        return 2;
      } else if (this.percentagePoison > 20) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  