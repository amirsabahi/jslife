const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Box properties
const boxWidth = 50;
const boxHeight = 50;
let boxX = canvas.width / 2 - boxWidth / 2;
let boxY = canvas.height - boxHeight;
let jumpHeight = 200;
let jumpSpeed = 10;
let isJumping = false;
let jumpCount = 0;
let isFalling = false;
const gravity = 0.5;

// Key states
let upKeyPressed = false;

// Event listeners for key presses
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" && !isJumping && !isFalling) {
    upKeyPressed = true;
    isJumping = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") {
    upKeyPressed = false;
  }
});

// Update game state
function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply gravity
  if (isJumping) {
    boxY -= jumpSpeed - gravity * jumpCount;
    jumpCount++;

    if (jumpCount > jumpHeight / jumpSpeed) {
      isJumping = false;
      isFalling = true;
      jumpCount = 0;
    }
  } else if (isFalling) {
    boxY += jumpSpeed - gravity * jumpCount;
    jumpCount++;

    if (boxY >= canvas.height - boxHeight) {
      boxY = canvas.height - boxHeight;
      jumpCount = 0;
      isFalling = false;
    }
  }

  // Draw box
  ctx.fillStyle = "blue";
  ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

  // Request animation frame
  requestAnimationFrame(update);
}

// Start the game
update();
