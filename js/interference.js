var diamonds = [];// object array
var numX =4;
var numBars = 20;  //enter an integer!!for grid along X-axis
var space; //spacing between
var winRatio;
var numY;//width/height
var i, j; //loop variables
var dimens;
var clickX; //vars for mousepressed or touch,
var clickY;
var windowX;
var windowY;
var name;
var h2;// if i want to intro an element
var navObj;
var navBtm;
var init;
var yoff;
var yoff1;
var noiseInt;
var yincrement;
var n;//coords of ypos for text
var n1;
var h3;

//for interference program
var barsL=[];
var barsR=[];


var initWidthL = 4;//thickness of bar
var initWidthR = 4;//thickness of bar

var vel1;
var vel2;
//var barsL = [];
var newBar;
var showBar;
var interval = 50;


function setup() {
  pixelDensity(2);
  var canvas = createCanvas(windowWidth,windowHeight);
   canvas.parent('sketch-holder');
   windowY = windowHeight;
   windowX = windowWidth;

   space = int(windowWidth/numX);
   winRatio = windowHeight/windowWidth;
   numY = int(numX*winRatio);
   dimens = int(space/4); //width of side of diamonds
   h3 = createElement('h3','');
   h1 = createElement('h1','Interference');

// setup for Noise
   yoff = 0.1;
   yoff1 = 0.2;
   yincrement = 0.007;
   noiseInt = 0.3;

//setup for interference bars
//initWidth = 2;
vel1 = .8; //velocities of left and right bars
vel2 = .6;



}
function draw() {  //if window changes size
  if(windowX !=windowWidth || windowY !=windowHeight){
    //h2.setContent("");
    removeElements();
    setup();
    }


  background(255,255,255);

  //to adjust position of sketch in relation to navbar
  navObj = document.getElementById("custom-bootstrap-menu");
  navBtm = navObj.getBoundingClientRect();
  console.log(navBtm.bottom);//bottom coords of nav bar(when false = 52)

  //noise on headers
  n = noise(yoff)*windowHeight/8;
  n1 = noise(yoff1)*windowHeight/6;
  //changing initwidthL and right according to mouse/touch
  initWidthL= (mouseX/windowWidth*10);
  initWidthR= (mouseY/windowWidth*10);


  yoff += yincrement;
  yoff1 += yincrement;
  //noisy position of headers realised
  //color(100,100,100);
  if(windowWidth>windowHeight){
  h3.position(windowWidth/2,windowHeight/2.0+n+navBtm.bottom);

  }else
  {
    h3.position(windowWidth/5,windowHeight/2.6+n+navBtm.bottom);
}
  h1.position(windowWidth/5,windowHeight/5+n1+navBtm.bottom);


//spawn arrays - newBarL
if(frameCount%interval==0){
   newBar = {
    pos : 0,
    width : initWidthL,
    vel : vel1

  }
  barsL.push(newBar);

}

//spawn arrays - newBarR
if(frameCount%interval==0){
   newBar = {
    pos : windowWidth,
    width : initWidthR,
    vel : vel1

  }
  barsR.push(newBar);

}
// loop drawing of elements newBarL


for (var i=0; i<barsL.length;i++){
  showBar = barsL[i];
  noStroke();
  fill(0,0,0,200);
  rect(showBar.pos, 0, showBar.width*2, windowHeight);
  barsL[i].pos += vel1;
  console.log(vel1, barsL.length-1);
  if (barsL[i].pos>windowWidth+50){
    barsL.splice(i,1);//taking out element if out of screen

  }
}

for (var i=0; i<barsR.length;i++){
  showBar = barsR[i];
  noStroke();
  fill(0,0,0,200);
  rect(showBar.pos, 0, showBar.width*2, windowHeight);
  barsR[i].pos -= vel2;
  console.log(vel1, barsR.length-1);
  if (barsR[i].pos<-50){
    barsR.splice(i,1);//taking out element if out of screen

  }
}

}
