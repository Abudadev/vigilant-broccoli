function preload(){
    Food = loadImage("Shawarma.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
}

function draw(){
        image(Food,0,0,500,400);
        text("Food",55,50);
        stroke("blue");
        noFill();
        rect(30,30,450,350);
}

function back(){
    window.location = "index.html";
}