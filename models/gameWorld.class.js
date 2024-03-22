class Gameworld {
  character = new Character();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.character.world = this;
    this.character.moveRight();
    this.character.moveLeft();
    this.character.moveUp();
    this.character.moveDown();
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.getDamage();
          console.log(this.character.health)
          console.log(this.character.isDead())
        }
      });
    }, 200);
  }


  draw() {
    //delete Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //moveCamera
    this.ctx.translate(this.camera_x, 0);
    //add Objects to Canvas
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.barriers);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.poison);
    this.addToMap(this.character);

    this.addObjectsToMap(this.level.enemies);
    //removeCamera
    this.ctx.translate(-this.camera_x, 0);
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
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.positionx = mo.positionx * -1;
  }
  flipImageBack(mo) {
    mo.positionx = mo.positionx * -1;
    this.ctx.restore();
  }
  
}
