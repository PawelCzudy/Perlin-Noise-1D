
var xoff = 0;
var yoff = 0;
var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();

  var xoff = start;
  for (var x = 0; x < width; x++){
    stroke(255);
    var y = map(noise(xoff),0,1,0,height);
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  start -= inc;
}
