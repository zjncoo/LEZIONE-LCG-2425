let randomizeSizes = false; // Variabile per controllare se randomizzare le dimensioni

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(235, 236, 228);
  noStroke();

  let larghezza = 20;
  let vGutter = 8;
  let minSquareSize = 7;

  let columns = (windowWidth / (larghezza + vGutter));
  let rows = (windowHeight / (larghezza + vGutter / 30));

  for (let r = 0; r < rows; r++) {
    let gridSize = max(larghezza * (1 - r / rows), minSquareSize); // Dimensione base
    if (randomizeSizes) {
      gridSize *= random(0.5, 1.5); // Applica il fattore casuale se randomizeSizes è true
    }

    for (let i = 0; i < columns; i++) {
      let xPos = i * (larghezza + vGutter) + (r % 2) * (larghezza + vGutter) / 2; // Offset per righe pari
      let yPos = r * (larghezza + r * vGutter / 30);
      
      push();
      translate(xPos, yPos);
      rotate(PI / 4);
      fill(0);
      rectMode(CENTER);
      rect(0, 0, gridSize, gridSize); // Disegna il quadrato
      pop();
    }
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

// Aggiungi un event listener per la pressione di un tasto
function keyPressed() {
  if (key === 'r' || key === 'R') { // Se premi 'r', randomizza le dimensioni
    randomizeSizes = true;
    redraw();
  }
}
