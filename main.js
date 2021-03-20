NoseX=0;
NoseY=0;
function preload(){
    muctache = loadImage(' https://i.postimg.cc/HkwWBgt1/m-removebg-preview.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);

}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function draw(){
image(video,0,0,300,300);
image(muctache,NoseX,NoseY,50,50);
}
function take_snapshot(){
  save("circus.png");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("Nose X= "+results[0].pose.nose.x);
        console.log("Nose Y= "+results[0].pose.nose.y); 
        NoseX=results[0].pose.nose.x-20;
        NoseY=results[0].pose.nose.y;

    }
}

