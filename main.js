function preload(){
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
   
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized')
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.net.nose.x);
        console.log("nose y = " +results[0].pose.nose.y);
    }
}


function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('student_name.png');
}

function onClick(){
}

