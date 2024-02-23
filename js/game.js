let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new Gameworld(canvas, keyboard);
  ctx = canvas.getContext("2d");
}

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.keyCode === 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode === 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode === 40) {
    keyboard.DOWN = true;
  }
  if (event.keyCode === 38) {
    keyboard.UP = true;
  }
  if (event.keyCode === 32) {
    keyboard.SHOOT = true;
  }
});

document.addEventListener("keyup", (event) => {
    console.log(event);
    if (event.keyCode === 39) {
      keyboard.RIGHT = false;
    }
    if (event.keyCode === 37) {
      keyboard.LEFT = false;
      console.log(keyboard.LEFT);
    }
    if (event.keyCode === 40) {
      keyboard.DOWN = false;
    }
    if (event.keyCode === 38) {
      keyboard.UP = false;
    }
    if (event.keyCode === 32) {
      keyboard.SHOOT = false;
    }
  });
