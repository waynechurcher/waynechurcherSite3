var distances = [];
var maxDistance;
var spacer;

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
   canvas.parent('sketch-holder');
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
 var wayne = getElementsByTagName('h1');



  noLoop();  // Run once and stop



}

function draw() {
  background(0);

  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}
