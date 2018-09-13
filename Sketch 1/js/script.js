var i

function setup() {
  createCanvas(720,480);
}
function draw() {
  for(var i = 0; i < 10; i++) {
    ellipse(10*i+i,10*i+i,10+i);
  }
}
