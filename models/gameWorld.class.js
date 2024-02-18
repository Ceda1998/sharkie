class Gameworld {
  character = new Character();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  ctx;
  canvas;
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.character.img, this.character.positionx, this.character.positiony, this.character.height, this.character.width);
    this.enemies.forEach(enemy => {
        console.log(enemy.img)
        this.ctx.drawImage(enemy.img, enemy.positionx, enemy.positiony, enemy.height, enemy.width);
    });
    //draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function() {
        self.draw();
    }) ;
  }
}
