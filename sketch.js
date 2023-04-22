var a=0;
var sw=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(a);
  if(mouseX>=width/2-50 && mouseX<=width/2+50 && mouseY>=height/2-50 && mouseY<=height/2+50){
    fill(0,0,255,100,100);
    }
  else{
    fill(255,0,0,100,100);
  }
  
  rect(width/2,height/2,100);
  ellipse(width/2,height/2,100,30);
  ellipse(width/2,height/2,30,100);
  
  if(mouseX>=width/2-50 && mouseX<=width/2+50 && mouseY>=height/2-50 && mouseY<=height/2+50){
    sw=1;
  }else{
    sw=0
  }
  
  
  
}

function mousePressed(){
  if(sw==1&&a==0){
    a=255;
  }
  else if(sw==1&&a==255){
    a=0;
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}