class Level {
    enemies;
    barriers;
    backgroundObjects;
    coins;
    poison;
    levelEndPositionX = 3400;
    levelEndPositionYup = -120;
    levelEndPositionYdown = 360;

    constructor(enemies, barriers, coins, poison, backgroundObjects) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.coins = coins;
        this.poison = poison;
        this.backgroundObjects = backgroundObjects;
       
    }
}