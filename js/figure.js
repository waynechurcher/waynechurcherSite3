
var windowX;
var windowY;


function setup() {
  pixelDensity(2);
  frameRate(7);
  noStroke();
  var canvas = createCanvas(windowWidth,windowHeight);
   canvas.parent('sketch-holder');

  windowX = windowWidth;
  windowY = windowHeight;


  //noLoop();  // Run once and stop



}

function draw(){//if window changes size
  if(windowX !=windowWidth || windowY !=windowHeight){
  removeElements();
  setup();
  }

  background(0);
  fill(255,255,255);
  rectMode(CENTER);
  rect(0,windowY/2,MyRandomNo(),windowHeight);
  rect(windowWidth,windowY/2,MyRandomNo(),windowHeight);


}

function MyRandomNo(){
  var ran;
  ran = Math.random() *200 +250;
  return ran;
}
