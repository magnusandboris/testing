function setup() {
  createCanvas(600,600);
  console.log("Setup");
}

function draw() {
  background(255,0,255);
  fill(0,255,255);
  ellipse(300,300,frameCount/20,frameCount/20);
  console.log(frameCount);
}