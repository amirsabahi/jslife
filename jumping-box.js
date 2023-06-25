const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Floor properties
const floorWidth = canvas.width;
const floorHeight = 20;
const floorX = 0;
const floorY = canvas.height - floorHeight;

// Box properties
const boxWidth = 50;
let boxHeight = 100; // Make the blue box twice as tall
let boxX = canvas.width / 2 - boxWidth / 2;
let boxY = canvas.height - boxHeight - floorHeight;
let jumpHeight = 290;
let jumpSpeed = 10;
let moveSpeed = 3;
let isJumping = false;
let jumpCount = 0;
let isFalling = false;
const gravity = 0.5;
const easingFactor = 0.08; // Adjust this for different easing effect

// Moving rectangle properties
const rectWidth = 50;
const rectHeight = 30; // Make the red box shorter
let rectX = -rectWidth; // Start outside the canvas
let rectY = canvas.height - floorHeight - rectHeight - Math.floor(Math.random() * 80) + 1; // Adjust the distance from the floor

// Key states
let upKeyPressed = false;
let downKeyPressed = false;
let leftKeyPressed = false;
let rightKeyPressed = false;

// Event listeners for key presses
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" && !isJumping && !isFalling) {
    upKeyPressed = true;
    isJumping = true;
  }
  if (event.code === "ArrowDown") {
    if (downKeyPressed) {
      return; // Ignore if the down key is already pressed
    }
     downKeyPressed = true;
     boxHeight /= 2; // Reduce box height by half
     boxY += boxHeight; // Adjust box position from top
  }
  if (event.code === "ArrowLeft") {
    leftKeyPressed = true;
  }
  if (event.code === "ArrowRight") {
    rightKeyPressed = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") {
    upKeyPressed = false;
  }
  if (event.code === "ArrowDown") {
    downKeyPressed = false;
    boxY -= boxHeight; // Restore box position to original
    boxHeight *= 2; // Restore box height to original value
    
  }
  if (event.code === "ArrowLeft") {
    leftKeyPressed = false;
  }
  if (event.code === "ArrowRight") {
    rightKeyPressed = false;
  }
});

// Easing function (ease-out)
function easeOut(t) {
  return 1 - Math.pow(1 - t, 2);
}

// Check collision between two rectangles
function isCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// Update game state
function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply gravity
  if (isJumping) {
    const t = jumpCount / (jumpHeight / jumpSpeed);
    const easingSpeed = jumpSpeed * (1 - easeOut(t));
    boxY -= easingSpeed;
    jumpCount++;

    if (jumpCount > jumpHeight / jumpSpeed || boxY <= canvas.height - jumpHeight) {
      isJumping = false;
      isFalling = true;
      jumpCount = 0;
    }
  } else if (isFalling) {
    boxY += jumpSpeed - gravity * jumpCount;
    jumpCount++;

    // Place it back on the floor
    if (boxY >= canvas.height - boxHeight - floorHeight) {
      boxY = canvas.height - boxHeight - floorHeight;
      jumpCount = 0;
      isFalling = false;
    }
  }

  // Move box left or right
  if (leftKeyPressed) {
    boxX -= moveSpeed;
  }
  if (rightKeyPressed) {
    boxX += moveSpeed;
  }

  // Prevent box from going off the screen
  if (boxX < 0) {
    boxX = 0;
  } else if (boxX + boxWidth > canvas.width) {
    boxX = canvas.width - boxWidth;
  }

  // Move and reset rectangle when it exits the canvas
  rectX += moveSpeed;
  if (rectX > canvas.width) {
    rectX = -rectWidth;
    rectY = canvas.height - floorHeight - rectHeight - Math.floor(Math.random() * 80) + 1;
  }

  // Check collision between the blue box and the red rectangle
  const blueBox = { x: boxX, y: boxY, width: boxWidth, height: boxHeight };
  const redRect = { x: rectX, y: rectY, width: rectWidth, height: rectHeight };
  if (isCollision(blueBox, redRect)) {
    // Handle collision here (e.g., game over, score increment, etc.)
    console.log("Collision detected!");
  }

  // Draw floor
  ctx.fillStyle = "brown";
  ctx.fillRect(floorX, floorY, floorWidth, floorHeight);

  // Draw box
  ctx.fillStyle = "blue";
  ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

  // Draw moving rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  // Request animation frame
  requestAnimationFrame(update);
}

// Start the game
update();
