// A sample code from Snake Game user control
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Key test</h1>`;

document.addEventListener('keydown', (e) => {
  console.log(e.keyCode);
  let keyNum = e.keyCode;
  let directionFound = -1;
  let currentDirection = -1;
  let lastMove = 3;
  switch (keyNum) {
    case 37:
    case 65:
      directionFound = 3;
      break;
    case 38:
    case 87:
      directionFound = 0;
      break;
    case 39:
    case 68:
      directionFound = 1;
      break;
    case 40:
    case 83:
      directionFound = 2;
      break;
  }
  console.log(Math.abs(directionFound - lastMove));
  if (Math.abs(directionFound - lastMove) !== 2) {
    // Prevent object from turning 180 degrees
    console.log('No!!');
    currentDirection = directionFound;
  }
});
