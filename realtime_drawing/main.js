var noseX=0, noseY=0, wristLX=0, wristRX=0, difference=0

function setup(){
    canvas = createCanvas(550, 550); 
    canvas.position(560, 150); 
    video= createCapture(VIDEO);
    video.size(550, 500);
    classifier= ml5.poseNet(video, function(){
        console.log("Model Loaded");
    })
    classifier.on("pose", classify); 

}

function classify(result){
    if(result.length>0){
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        wristLX=result[0].pose.leftWrist.x;
        wristRX=result[0].pose.rightWrist.x;
        difference= Math.abs(Math.floor(wristRX-wristLX));
        console.log(difference);
    }
}

function draw(){
    background("white");
    fill("red");
    stroke("blue");
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML="Width and height of a square will be:"+difference+" px";
}

/*var x = 200 ,y=200;

var i,j;
var db,position;

 function setup(){
     
     createCanvas(400,400)
     db = firebase.database();
     db.ref("ball/position").on("value", function(snapShot){
         console.log(snapShot,snapShot.val())
        position=snapShot.val();
         x=position.x;
         y=position.y;
         
     })
 }

 function draw(){
     background("white");
     
     rect(x,y,50,50);
 }

 function keyPressed(){
     console.log(keyCode);

    if(keyCode==37){
        changePosition(-1,0); 
    }
    if(keyCode==38){
        changePosition(0,-1);
    }
    if(keyCode==39){
        changePosition(1,0);
    }
    if(keyCode==40){
        changePosition(0,1);
    }
 }
 function changePosition(a,b){
    db.ref("ball/position").update({
        x: x+a,
        y: y+b
    })
 }*/
 