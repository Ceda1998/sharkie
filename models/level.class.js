class Level {
    enemies;
    barriers;
    backgroundObjects;
    coins;
    levelEndPositionX = 2300;

    constructor(enemies, barriers, coins, backgroundObjects) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
       
    }
}