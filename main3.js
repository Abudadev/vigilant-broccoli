function preload(){
    Toy = loadImage("toy.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
}

function draw(){
        image(Toy,0,0,500,400);
        text("Toy",65,175);
        stroke("blue");
        noFill();
        rect(50,140,150,150);
}

function back(){
    window.location = "index.html";
}