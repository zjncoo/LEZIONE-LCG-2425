function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  noFill();
  blendMode(BURN);

  stroke("tomato");

  for (let i = 0; i < 5; i++) {
    push();
    translate(50 * i, 0);
    drawWorms(random(1, 5), 50, random(4, 10));
    pop();
  }
}

function drawWorms(numWorms = 3, side = 50, points = 4) {
  for (let n = 0; n < numWorms; n++) {
    drawWorm(side, points);
  }
}

function drawWorm(side = 50, points = 7) {
  beginShape();

  for (let p = 0; p < points; p++) {
    let x = random(side);
    let y = random(side);

    curveVertex(x, y);
  }

  endShape();
}
