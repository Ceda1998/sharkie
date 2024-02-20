class Gameworld {
  character = new Character();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  barriers = [new Barrier()];
  backgroundObjects = [
    new BackgroundObject("../img/3. Background/Layers/5. Water/D1.png", 0, 0),
    new BackgroundObject("../img/3. Background/Layers/4.Fondo 2/D.png",0, 80),
    new BackgroundObject("../img/3. Background/Layers/3.Fondo 1/D.png",0, 80),
    new BackgroundObject("../img/3. Background/Layers/2. Floor/D.png", 0, 80),
  ];
  ctx;
  canvas;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    //delete Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //add Objects to Canvas
    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.barriers);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
   
    

    //draw() repeat:
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.positionx, mo.positiony, mo.width, mo.height);
  }
}
