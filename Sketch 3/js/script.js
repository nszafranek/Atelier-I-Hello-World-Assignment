function  setup(){
  createCanvas(720, 480);
}

function draw() {
  ellipse(width/2, height/2, 30);
}

function mouseClicked() {
  var clickDistance = dist(width/2, height/2, mouseX, mouseY)
  if(clickDistance < 15){
      fill(100);
    }
  }
