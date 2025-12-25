import { BUBBLE_RADIUS, COLORS } from "./constants";

const level0Bubbles = [];
const numRows = 3;
const numBubblesInEvenRow = 8;
const numBubblesInOddRow = numBubblesInEvenRow - 1;
const colors = [ 'red', 'pink', 'orange', 'purple' ];
for (let i = 0; i < numRows; i++) {
  const row = [];
  const y = i * 2 * BUBBLE_RADIUS;
  const isEvenRow = i % 2 === 0;
  const bubblesInRow = isEvenRow ? numBubblesInEvenRow : numBubblesInOddRow;
  for (let j = 0; j < bubblesInRow; j++) {
    row.push({ 
      position: {
        x: j * 2 * BUBBLE_RADIUS + (isEvenRow ? 0 : BUBBLE_RADIUS), 
        y: -y 
      },
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    });
  }
  level0Bubbles.push(row);
}

export { level0Bubbles };