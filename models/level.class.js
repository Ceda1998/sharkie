class Level {
    enemies;
    barriers;
    backgroundObjects;
    coins;
    poison;
    hearth;
    levelEndPositionX = 3400;
    levelEndPositionYup = -120;
    levelEndPositionYdown = 360;

    constructor(enemies, barriers, coins, poison,hearth, backgroundObjects) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.coins = coins;
        this.poison = poison;
        this.hearth = hearth;
        this.backgroundObjects = backgroundObjects;
    }
}