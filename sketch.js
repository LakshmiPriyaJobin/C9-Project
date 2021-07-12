var box
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyDown('right')){
  background('red');
}
if(keyDown('left')){
  background('orange');
}
if(keyDown('up')){
  background('yellow');
}
if(keyDown('down')){
  background('green');
}
if(keyDown('s')){
  background('blue');
}
if(keyDown('j')){
  background('indigo');
}
if(keyDown('l')){
  background('violet');
}
}




