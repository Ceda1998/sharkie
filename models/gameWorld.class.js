class Gameworld {
  character = new Character();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  poisonBar = new PoisonBar();
  shootableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.checkShooting();
  }

  setWorld() {
    this.character.world = this;
    this.character.moveRight();
    this.character.moveLeft();
    this.character.moveUp();
    this.character.moveDown();
    this.character.playIdle();
    this.character.showIsHurt();
    this.character.beDead();
  }

  checkShooting() {    
    setInterval(() => {
      if(this.keyboard.SHOOT && this.character.poisonBottles > 0) {
        let blubber = new ShootableObject(this.character.positionx + 120, this.character.positiony + 100);
        this.shootableObjects.push(blubber)
        this.character.animateShoot();
        this.character.poisonBottles -= 10;
        this.poisonBar.setPercentagePoison(this.character.poisonBottles);
        this.checkCanShoot();
      }
    }, 250);
  }
  checkCanShoot() {
    let poisonCost = 10;
    setInterval(() => {
      this.poisonBar.setPercentagePoison(this.character.poisonBottles - poisonCost);
    },1000/60);
  }


  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.getDamage();
          this.statusBar.setPercentage(this.character.health);
        }
      });
      this.level.coins.forEach((coin, index) => {
        if (this.character.isColliding(coin)) {
          this.character.getCoins();
          this.coinBar.setPercentageCoin(this.character.coins);
          this.level.coins.splice(index, 1); 
        }
      });
      this.level.poison.forEach((poison, index) => {
        if (this.character.isColliding(poison)) {
          this.character.getPoison();
          this.poisonBar.setPercentagePoison(this.character.poisonBottles);
          this.level.poison.splice(index, 1); 
        }
      });
    this.level.hearth.forEach((hearth, index) => {
      if (this.character.isColliding(hearth)) {
        this.character.getHealth();
        this.statusBar.setPercentage(this.character.health);
        this.level.hearth.splice(index, 1); 
      }
    });
  }, 200);
  }


  draw() {
    //delete Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.translate(this.camera_x, 0); //moveCamera forward
    //add Objects to Canvas
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.barriers);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.poison);
    this.addObjectsToMap(this.level.hearth);
    this.addObjectsToMap(this.shootableObjects);
    this.ctx.translate(-this.camera_x, 0); //moveCamera back
    //--------- space for fixed objects in canvas
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.poisonBar);
    this.ctx.translate(this.camera_x, 0); //moveCamera forward
    //add character to map -->
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
