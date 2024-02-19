class Gameworld {
  character = new Character();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  barriers = [new Barrier()];
  backgroundObjects = [
    new BackgroundObject("../img/3. Background/Layers/2. Floor/D.png", 0, 180),
  ];
  ctx;
  canvas;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.barriers);
    this.addObjectsToMap(this.backgroundObjects);

    //draw() wird immer wieder aufgerufen
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
    this.ctx.drawImage(mo.img, mo.positionx, mo.positiony, mo.height, mo.width);
  }
}
