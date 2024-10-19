function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  // Set the background color to black
  background(0);
  
  // Calculate grid size based on the window size
  let gridSize = min(windowWidth, windowHeight) / 20;  // Adjust gridSize relative to window size
  let columns = floor(width / gridSize);  // Calculate number of columns
  let rows = floor(height / gridSize); // Calculate number of rows
  
  for (let j = 0; j < rows; j++) {
    // Map the rotation angle to increase progressively from 0 to a larger value as we go down
    let maxAngle = map(j, 0, rows, 0, PI / 2);  // From 0 to 90 degrees (PI/2) as we go down
    let rowAngle = random(maxAngle / 2, maxAngle);  // Randomize angle within an increasing range
    
    for (let i = 0; i < columns; i++) {
      let xPos = i * gridSize;
      let yPos = j * gridSize;
      
      // Map the size of the squares based on the row (y-coordinate)
      let squareSize = map(j, 0, rows, gridSize * 0.9, gridSize * 0.4);
      
      push();
      translate(xPos + gridSize / 2, yPos + gridSize / 2);
      rotate(rowAngle);  // Apply random angle increasing with row index
      fill(255);  // Color the squares white
      noStroke();  // No stroke for cleaner appearance
      rectMode(CENTER);
      rect(0, 0, squareSize, squareSize);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();  // Redraw the grid when the window is resized
}


function draw() {
  background("#3c3b4b");
  fill("#7280a8");
  noStroke();
  let altezza = 25;
  let vGutter = 5;

  let columns = windowWidth / (10+5);  
  let rows = windowHeight / (altezza + vGutter);

  for(let i = 0; i < columns; i++){
    for(let r = 0; r < rows; r++){
      
      let xPos = i * 15 + random(-2.5, 2.5)
      let yPos = r * (altezza + vGutter) + random(-2.5, 2.5)
      
      rect(xPos, yPos, 10, altezza);
    }
  }
}
