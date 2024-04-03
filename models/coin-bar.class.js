class CoinBar extends DrawableObject {

    IMAGES_COINBAR = [
      "./img/4. Marcadores/green/Coin/0_  copia 4.png", //0
      "./img/4. Marcadores/green/Coin/20_  copia 2.png",
      "./img/4. Marcadores/green/Coin/40_  copia 4.png",
      "./img/4. Marcadores/green/Coin/60_  copia 4.png",
      "./img/4. Marcadores/green/Coin/80_  copia 4.png",
      "./img/4. Marcadores/green/Coin/100_ copia 4.png", //5
    ];
  
    percentageCoins = 100;
  
    constructor() {
      super();
      this.loadImages(this.IMAGES_COINBAR);
      this.setPercentageCoin(100);
      this.positionx = 20;
      this.positiony = 25;
      this.width = 250;
      this.height = 70
    }
  
    //setPercentage(50)
    setPercentageCoin(percentageCoins) {
      this.percentageCoins = percentageCoins; // -> 0.....5 ermitteln
      let path = this.IMAGES_COINBAR[this.resolveImageIndexCoin()]
      this.img = this.imageChache[path];
  
    }
  
    resolveImageIndexCoin() {
      if (this.percentageCoins == 100) {
        return 5;
      } else if (this.percentageCoins > 80) {
        return 4;
      } else if (this.percentageCoins > 60) {
        return 3;
      } else if (this.percentageCoins > 40) {
        return 2;
      } else if (this.percentageCoins > 20) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  