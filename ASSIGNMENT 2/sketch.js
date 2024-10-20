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

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Only draw once
}

function draw() {
  background(0); // Dark background for contrast
  let cols = windowWidth / 50;
  let rows = windowHeight / 50;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * 50 + 25; // Centering eclipse horizontally
      let y = r * 50 + 25; // Centering eclipse vertically

      let sunSize = random(15, 25); // Random sun size
      let moonSize = random(sunSize * 0.5, sunSize * 0.8); // Moon size relative to sun

      fill(255, 204, 0); // Sun color
      noStroke();
      ellipse(x, y, sunSize); // Draw sun

      let moonX = x + random(-sunSize / 3, sunSize / 3); // Moon offset position
      let moonY = y + random(-sunSize / 3, sunSize / 3);

      fill(0); // Moon color
      ellipse(moonX, moonY, moonSize); // Draw moon
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); // Redraw on window resize
}

