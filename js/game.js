let canvas; 
let ctx;
let gameWorld = new Gameworld();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log('My Character is', gameWorld.character)
}