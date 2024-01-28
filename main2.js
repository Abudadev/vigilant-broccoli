function preload(){
    petimg = loadImage("Rizzcat.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
}

function draw(){
        image(petimg,0,0,500,400);
        text("Cat",35,75);
        stroke("blue");
        noFill();
        rect(10,40,450,250);
}

function back(){
    window.location = "index.html";
}