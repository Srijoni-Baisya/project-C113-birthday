function preload(){
    img = loadImage('https://media.istockphoto.com/vectors/happy-birthday-cake-card-vector-id931554898?k=6&m=931554898&s=170667a&w=0&h=Scrg_hIfWhxP92BYe7P43Cql1AB6EA9v0Kg1FKlFtOw=');
}

function setup(){
    canvas = createCanvas(1000,600);
    canvas.position(250,150);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(img,30,80,400,400);
    //rectangle
    fill(65,105,255);
    stroke(65,105,255);
    rect(490,90,470,370,10);
    //video
    image(video,500,100,450,350);

    //circles
    fill(255,0,0);
    stroke(255,255,0);
    circle(480,80,50);
    circle(960,80,50);
    circle(480,460,50);
    circle(960,460,50);

    //ellipse
    fill(128,0,128);
    stroke(128,0,128);
    ellipse(650,70,70,50);
    ellipse(650,480,70,50);
    ellipse(470,220,50,70);
    ellipse(975,220,50,70);

    //yellow ellipse
    fill(255,255,0);
    stroke(255,255,0);
    ellipse(780,70,70,50);
    ellipse(780,480,70,50);
    ellipse(470,350,50,70);
    ellipse(975,350,50,70);
}

function take_snapshot(){
    save('birthday_image.png');
}