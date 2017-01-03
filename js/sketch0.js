  var diamonds = [];// object array
  var numX =8;  //enter an integer!!for grid along X-axis
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
  var menu;
  var init;

  var yoff; // noise variables for element movement
  var yoff1;
  var yoff2;
  var yincrement;
  var n;
  var n1;
  var n2;
  var h3;
  var fav1;
  var fav2; // for favicon image variables



  function setup() {

    var canvas = createCanvas(windowWidth,windowHeight);
     canvas.parent('sketch-holder');
     windowY = windowHeight;
     windowX = windowWidth;


     space = int(windowWidth/numX);
     winRatio = windowHeight/windowWidth;
     numY = int(numX*winRatio);
     dimens = int(space/4); //width of side of diamonds
     fav1 = loadImage("images/faviconPart1.png");
     fav2 = loadImage("images/faviconPart2.png");


     h3 = createElement('h3','creative projects');
    // h1 = createElement('h1','W a y n e  <br>C h u r c h e r');


     yoff = 0;
     yoff1 = 0.2;
     yoff2 = 0.8;
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



    //to adjust position of sketch in relation to navbar
    navObj = document.getElementById("custom-bootstrap-menu");
    navBtm = navObj.getBoundingClientRect();
    //console.log(navBtm.bottom);//bottom coords of nav bar(when false = 52)


    //noise on headers
    n = noise(yoff)*windowHeight/8;
    n1 = noise(yoff1)*windowHeight/6;
    n2 = noise(yoff2);  //extra nise for say...colour??
    yoff += yincrement;
    yoff1 += yincrement;
    yoff2 += yincrement;
    //noisy position of headers realised
    //console.log(n2);
    background(250,230, 150+int(n2*100));

    if(windowWidth>windowHeight){
      tint(255,255,255,int(n2*100));
      image(fav2,windowWidth/4,windowHeight/7+n+navBtm.bottom-100,windowHeight/2.5*0.416,windowHeight/2.5 );
      tint(255,255,255,100);
      image(fav1,windowWidth/4,windowHeight/5+n1+navBtm.bottom-100,windowHeight/2.5*0.416,windowHeight/2.5);


    h3.position(windowWidth/1.6,windowHeight/6+n+navBtm.bottom+100)

    }else
    {h3.position(windowWidth/4,windowHeight/2.+n+navBtm.bottom+100);

    //h1.position(windowWidth/5,windowHeight/5+n1+navBtm.bottom);
    tint(255,255,255,int(n2*100));

    image(fav2,windowWidth/2.5,windowHeight/7+n+navBtm.bottom-100,windowHeight/2.5*0.416,windowHeight/2.5 );
    tint(255,255,255,100);
    image(fav1,windowWidth/2.5,windowHeight/5+n1+navBtm.bottom-100,windowHeight/2.5*0.416,windowHeight/2.5);

  }
    noTint();

    noStroke();
    fill(200,200,100,50); //orange of sorts
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
