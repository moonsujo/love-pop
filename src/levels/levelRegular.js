import { calculatePositionX, calculatePositionY } from "./heart";

const levelRegularBubbles = [];
const numRows = 6; // includes invisible row at top
const numBubblesInEvenRow = 8;
const numBubblesInOddRow = numBubblesInEvenRow - 1;
const numInvisibleRowBubbles = 7;
const invisibleRow = []
const numShotsToPenalty = 6;
const colors = [ 'red', 'pink', 'orange', 'purple', 'green' ];

for (let i = 0; i < numInvisibleRowBubbles; i++) {
    invisibleRow.push({
        position: {
            x: calculatePositionX(i, true),
            y: calculatePositionY(0)
        }
    })
}
levelRegularBubbles.push(invisibleRow);
for (let i = 1; i < numRows; i++) {
  const row = [];
  const isEvenRow = i % 2 === 0;
  const bubblesInRow = isEvenRow ? numBubblesInOddRow : numBubblesInEvenRow;
  for (let j = 0; j < bubblesInRow; j++) {
    row.push({ 
      position: {
        x: calculatePositionX(j, isEvenRow),
        y: calculatePositionY(i)
      },
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  levelRegularBubbles.push(row);
}

const levelRegularInfo = {
    numShotsToPenalty,
    bubbles: levelRegularBubbles,
    colors,
    level: 2
}

export { levelRegularInfo };