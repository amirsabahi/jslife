const canvas = document.getElementById("gameCanvas");
      const ctx = canvas.getContext("2d");

      // Floor properties
      const floorWidth = canvas.width;
      const floorHeight = 20;
      const floorX = 0;
      const floorY = canvas.height - floorHeight;

      // Box properties
      const boxWidth = 50;
      let boxHeight = 50;
      let boxX = canvas.width / 2 - boxWidth / 2;
      let boxY = canvas.height - boxHeight - floorHeight;
      let jumpHeight = 200;
      let jumpSpeed = 10;
      let isJumping = false;
      let jumpCount = 0;
      let isFalling = false;
      const gravity = 0.5;
      const easingFactor = 0.08; // Adjust this for different easing effect



      // Key states
      let upKeyPressed = false;
      let downKeyPressed = false;

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
      });

      // Easing function (ease-out)
      function easeOut(t) {
        return 1 - Math.pow(1 - t, 2);
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

        // Draw floor
        ctx.fillStyle = "brown";
        ctx.fillRect(floorX, floorY, floorWidth, floorHeight);

        // Draw box
        ctx.fillStyle = "blue";
        ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

        // Request animation frame
        requestAnimationFrame(update);
      }

      // Start the game
      update();
