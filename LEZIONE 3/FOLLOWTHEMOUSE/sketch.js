let canvasXMax=600;
let canvasYMax=600;

function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);
}

function draw() {
  
  textSize(15);
  let string_toprint="Contenuto mouseX= "
  +mouseX+ " \ny= "+mouseY;
  strokeWeight(15)

  line(0,mouseX, canvasXMax,mouseY);
  //DISEGNARE LINEA GIALLA SE SCHIACCIAMO IL MOUSE
  //p5 true -> SE MOUSE é SCHIACCIATO, altrimenti è FALSE
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT) {
      background(220);
    }
    //coloriamo di giallo

    stroke("yellow");

  }else{
    stroke("black");
  }
  mouseIsPressed;

}
