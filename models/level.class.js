class Level {
    enemies;
    barriers;
    backgroundObjects;
    levelEndPositionX = 2300;

    constructor(enemies, barriers, backgroundObjects) {
        this.enemies = enemies;
        this.barriers = barriers;
        this.backgroundObjects = backgroundObjects;
    }
}