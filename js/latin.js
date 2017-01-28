

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
  var smallestWidth;
//variables for artwork

var NumSwaps = 0;
var clickCount;
var  titleString = "Number";
var colorShiftRate1=.002;
var colorShift;


var  num = 5;//array dimensions
var Arr; //= new Array(num); //array - 2 dimensional array?
var intList;
var cell;
var upLoad = []; //upload 1 dim array
var NumSwaps = 0;
var navBtm;
var navObj;


  function setup() {
    pixelDensity(2);
    var canvas = createCanvas(windowWidth,windowHeight);
     canvas.parent('sketch-holder');
     windowY = windowHeight;
     windowX = windowWidth;

     winRatio = windowHeight/windowWidth;

     // setup for artwork

    // initialising new array

        if ( num>11){ ///restriction on size of latin square for all faces to be considered
          num = 11;
        }
        //var Arr = new Array(num);
  //      Arr = new Array(num).fill(new Array(num).fill(0));
    //    console.log("Arr[0]: " , Arr[0]);

        if(windowWidth<windowHeight) {smallestWidth=windowWidth}
          else{smallestWidth=windowHeight}
         cell = int(smallestWidth/(num+1));// visual output cell width
         //console.log(cell, smallestWidth);
//upload array filled with ascending numbers
    for(var i = 0; i<num; i++){
      upLoad[i] = i;
      console.log("test upLoad: "+upLoad[i]);
}



//print out array

/*
for(var r = 0; r<num;r++){
  var shuffleUp = shuffle(upLoad);

  for(var c = 0; c<num;c++){
    Arr[r][c] = shuffleUp[c];
    console.log( Arr[r][c]);


}
*/

for (var r = 0;r<num;i++){

//  console.log( num, Arr[r]);
//  console.log(Arr[r][0],Arr[r][1],Arr[r][2],Arr[r][3],Arr[r][4]);

}

//the meat in the sandwich...*************************

/*
var col=0;

for(var row = 1;row<num;row++){

   while(col<num){
     console.log("row="+row+ ",col="+col);
     var cntr = 0; //counter for swap within row
     var colChk = 0;
     while(colChk<row){  //colChk is actually chking btw rows (the column) above the row in question

       if (Arr[row][col] == Arr[colChk][col]){
         NumSwaps+=1;
                                  console.log("colChk="+colChk+".  number of swaps= "+ NumSwaps);
         cntr += 1;
         var swapRepos = Arr[row][col];

                                  console.log("row= "+ (row+1) + " col= "+(col+1) +" swapRepo = "+ swapRepos +  ", Arr[row][(col+cntr)%num]" + Arr[row][(col+cntr)%num]+ " counter= "+cntr+",  (col+cntr)%num = "+(col+cntr)%num);
         Arr[row][col] = Arr[row][(col+cntr)%num];

         Arr[row][(col+cntr)%num] = swapRepos;

       } else{cntr = 0;}
       colChk +=1;

     }

     if (col == (num-1) && cntr >=1){ //if anything in col (num-1) - ie the last column - is exchanged - do the row again - is this working?
       //col = 0;
     }//else{col+=1;}
     col+=1;
   }

 }*/




//**************************************************
textAlign(CENTER,CENTER);
background(250,250, 229);


for (var i = 0;i<num;i++){
  var leftDist = (windowWidth/2)-(num*cell/2)
    for (var j = 0;j<num;j++){
      rect(i*cell+leftDist,j*cell+cell/2,cell,cell);
      //var milli = int(millis()/100)/10+i*cell;
      textSize(20);
      var thisText = i + ","+j+",";

      text(thisText,i*cell+leftDist+cell/2,j*cell+cell )
    }
}


}




  function draw() {  //if window changes size
    if(windowX !=windowWidth || windowY !=windowHeight){
background(238,38,129);
      removeElements();
      setup();
      }
      //to adjust position of sketch in relation to navbar
      navObj = document.getElementById("custom-bootstrap-menu");
      navBtm = navObj.getBoundingClientRect();
      //  console.log(navBtm.bottom);//bottom coords of nav bar(when false = 52)
  }
