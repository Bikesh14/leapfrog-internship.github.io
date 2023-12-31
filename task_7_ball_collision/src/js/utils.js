/**
 * Return a random number between a range
 *
 * @param {number} min
 * @param {number} max
 * @returns number
 */
function getRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

/**
 * Return a random number between a range other than a specified number, by default 0
 *
 * @param {number} min
 * @param {number} max
 * @param {number} number
 * @returns {number} randomNumber
 */
function getRandomNumberOtherThan(min, max, number = 0) {
  let randomNumber = getRandomNumber(min, max);
  while (randomNumber === number) {
    randomNumber = getRandomNumber(min, max);
  }
  return randomNumber;
}

/**
 * Return a random color
 *
 * @returns {string}
 */
function getRandomColor() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "black",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Returns distance between two points
 *
 * @param {number} x1 x position of first element
 * @param {number} y1 y position of first element
 * @param {number} x2 x position of another element
 * @param {number} y2 y position of another element
 * @returns {number}
 */
function calculateDistance(x1, y1, x2, y2) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

/**
 * Set styles to an element
 *
 * @param {HTMLElement} element
 * @param {} styles
 */
function setStyles(element, styles = {}) {
  Object.assign(element.style, styles);
}
