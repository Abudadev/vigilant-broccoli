function preload(){
    drawer = loadImage("drawer.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
}

function draw(){
        image(drawer,0,0,500,400);
        text("Drawer",55,50);
        stroke("blue");
        noFill();
        rect(30,30,450,350);
}

function back(){
    window.location = "index.html";
}