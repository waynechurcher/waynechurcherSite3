  var diamonds = [];// object array
  var numX =16;  //enter an integer!!for grid along X-axis
  var space; //spacing between
  var winRatio;
  var numY;//width/height
  var i, j; //loop variables
  var dimens;
  var clickX; //vars for mousepressed or touch, to speed up vel
  var clickY;
  var windowX;
  var windowY;
  var name;
  var h2;// if i want to intro an element
  var h1 = getElementsByTagName(h1);
  var init;
  var Noise = new P5.Noise(brown);//noise
  var yoff;
  var yoff1;
  var yincrement;
  var n;
  var n1;
  var h3;


  function setup() {

    var canvas = createCanvas(windowWidth,windowHeight);
     canvas.parent('sketch-holder');
     windowY = windowHeight;
     windowX = windowWidth;


     space = int(windowWidth/numX);
     winRatio = windowHeight/windowWidth;
     numY = int(numX*winRatio);
     dimens = int(space/4); //width of side of diamonds
     h3 = createElement('h3','creative space');
     h1 = createElement('h1','W a y n e  <br>C h u r c h e r');


     yoff = 0;
     yoff1 = 0.1;
     yincrement = 0.007;

     //initialising position and velocity of each oblect
  for(i=1;i<numX;i++){
    diamonds[i]  = []; //setting up 2d array
      for(j=1;j<numY+1;j++){
        diamonds[i][j] = {
          x:i*space,  //push/pop position in window
          y:j*space,
          posX:0,     //position in absolute box space
          posY:0,
          vx:random(-.5,.5),
          vy:random(-.5,.5)
        };

      }
    }


  }
  function draw() {  //if window changes size
    if(windowX !=windowWidth || windowY !=windowHeight){
      //h2.setContent("");
      removeElements();
      setup();
      }


    background(137,150,200);


    //noise on headers
    n = noise(yoff)*windowHeight/8;
    n1 = noise(yoff1)*windowHeight/6;

    yoff += yincrement;
    yoff1 += yincrement;
    //noisy position of headers realised
    //color(100,100,100);
    if(windowWidth>windowHeight){
    h3.position(windowWidth/2,windowHeight/2.0+n)

    }else
    {h3.position(windowWidth/5,windowHeight/2.6+n);
    }
    h1.position(windowWidth/5,windowHeight/5+n1);

    noStroke();
    fill(225,150,68); //orange of sorts
    rectMode(CENTER); //centering coords of diamonds


    for(i=1;i<numX;i++){

        for(j=1;j<numY+1;j++){
          push();
          translate(diamonds[i][j].x+diamonds[i][j].posX,diamonds[i][j].y+diamonds[i][j].posY);
          //console.log(diamonds[i][j].x,diamonds[i][j].y)
          rotate(QUARTER_PI);
          rect(0,0,dimens,dimens);
          pop();
          diamonds[i][j].posX += diamonds[i][j].vx;
          diamonds[i][j].posY += diamonds[i][j].vy;
            if(diamonds[i][j].posX<-space/4 || diamonds[i][j].posX>space/4){
              diamonds[i][j].vx = -diamonds[i][j].vx
          }
          if(diamonds[i][j].posY<-space/4 || diamonds[i][j].posY>space/4){
            diamonds[i][j].vy = -diamonds[i][j].vy
        }
      }



  }
  }
