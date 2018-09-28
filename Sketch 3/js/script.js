var mySound

function  setup(){
  createCanvas(720, 480);
  mySound = createAudio("sounds/Shibuya.mp3");
  bubble = {
    x: width/2,
    y: height/2,
    r: 15,
  }
}

function draw() {
  ellipse(width/2, height/2, 30);
  bubble.x = bubble.x + random(-5, 5);
  bubble.y = bubble.y + random(-5, 5);
}

function mouseClicked() {
  var clickDistance = dist(width/2, height/2, mouseX, mouseY)
  if(clickDistance < 15){
      fill(100);
      mySound.play();
    }
  }
