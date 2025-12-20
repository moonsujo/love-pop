import { createSlice } from "@reduxjs/toolkit";
import { BUBBLE_RADIUS } from "../../constants";

const level0Bubbles = [];
const numRows = 3;
const numBubblesInEvenRow = 8;
const numBubblesInOddRow = numBubblesInEvenRow - 1;
const colors = ['red', 'green', 'yellow', 'blue']
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
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  level0Bubbles.push(row);
}

// convert everything to physics.
// it takes longer to traverse
// and takes more memory
// collision detection is easier
const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: {
    shot: false,
    arrowVector: [0, 1, 0],
    bubbles: level0Bubbles,
    bubblesLoaded: [
      { color: colors[Math.floor(Math.random() * colors.length)]}, 
      { color: colors[Math.floor(Math.random() * colors.length)]}
    ]
  },
  reducers: {
    setBubbleShot(state, action) {
      state.shot = action.payload;
    },
    setArrowVector(state, action) {
      state.arrowVector = action.payload;
    },
    setBubblesLoaded(state, action) {
      state.bubblesLoaded = action.payload;
    },
    popBubbles(state, action) {
      const bubblesToPop = action.payload; // array of [row, col] to pop
      for (const [row, col] of bubblesToPop) {
        state.bubbles[row][col] = null; // remove bubble
      }
    }
  }
})

export const { setBubbleShot, setArrowVector, setBubblesLoaded, popBubbles } = bubbleSlice.actions;

export const selectBubbleShot = (state) => state.bubble.shot;

export default bubbleSlice.reducer;