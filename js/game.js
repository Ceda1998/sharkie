let canvas; 
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new Gameworld(canvas);
    ctx = canvas.getContext('2d');
}