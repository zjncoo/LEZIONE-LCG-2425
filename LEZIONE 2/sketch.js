let xsize = 600;
let ysize = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //fare luna
  fill("orange");
  stroke("white");
  strokeWeight(5);
  circle(300, 100, 100);
  //prima della forma 
  //cambiare fill e stroke
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  //ordine in p5 è importante
  //tetti
  fill("brown")
  stroke("brown")
  triangle(30, 75, 58, 20, 86, 75);
  
}
