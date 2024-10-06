function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(30, 30, 50);  // Sfondo notturno

  // Disegna la luna
  fill(255, 255, 200);
  noStroke();
  ellipse(700, 100, 100, 100);

  // Disegna le nuvole
  fill(255);
  noStroke();
  for (let i = 0; i < 3; i++) {
    ellipse(100 + i * 200, 150, 150, 60);
    ellipse(150 + i * 200, 130, 100, 50);
    ellipse(80 + i * 200, 170, 120, 50);
  }

  // Disegna 12 alberi di pino
  let treeSpacing = width / 12;
  for (let i = 0; i < 12; i++) {
    drawPineTree(i * treeSpacing + treeSpacing / 2, height - 50);
  }
}

function drawPineTree(x, y) {
  // Tronco
  fill(139, 69, 19);
  rect(x - 5, y, 10, 30);

  // Aghi di pino
  fill(34, 139, 34);
  triangle(x - 20, y, x + 20, y, x, y - 50);
  triangle(x - 15, y - 30, x + 15, y - 30, x, y - 60);
  triangle(x - 10, y - 50, x + 10, y - 50, x, y - 70);
}