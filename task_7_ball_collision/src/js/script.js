// Balls will be rendered in this DOM element
let viewport;

viewport = document.getElementById("viewport");

const VIEWPORT_WIDTH = viewport.clientWidth;
const VIEWPORT_HEIGHT = viewport.clientHeight;

const ballsArray = [];

// Create balls, store in an array and render in viewport
for (let i = 0; i < BALL_COUNT; i++) {
  const x = getRandomNumber(0, VIEWPORT_WIDTH - BALL_WIDTH);
  const y = getRandomNumber(0, VIEWPORT_HEIGHT - BALL_WIDTH);
  const r = getRandomNumber(Math.min(5, BALL_RADIUS), BALL_RADIUS);
  const xSpeed = getRandomNumberOtherThan(-5, 5);
  const ySpeed = getRandomNumberOtherThan(-4, 4);
  const ball = new Ball(x, y, r, xSpeed, ySpeed);
  ballsArray.push(ball);
  viewport.appendChild(ball.getElement());
}

// Render balls in viewport
function render() {
  for (const ball of ballsArray) {
    ball.move();
    ball.draw();

    ball.checkWallCollision(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

    for (const otherBall of ballsArray) {
      if (ball === otherBall) continue;
      ball.checkBallCollision(otherBall);
    }
  }
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
