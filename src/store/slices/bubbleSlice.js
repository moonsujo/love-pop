import { createSlice } from "@reduxjs/toolkit";
import { BUBBLE_RADIUS } from "../../constants";

const level0Bubbles = [];
for (let i = 0; i < 3; i++) {
  const row = [];
  const y = i * 2 * BUBBLE_RADIUS;
  const isEvenRow = i % 2 === 0;
  const bubblesInRow = isEvenRow ? 8 : 7;
  for (let j = 0; j < bubblesInRow; j++) {
    row.push({ x: j * 2 * BUBBLE_RADIUS + (isEvenRow ? 0 : BUBBLE_RADIUS), y: y });
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
  },
  reducers: {
    setBubbleShot(state, action) {
      state.shot = action.payload;
    },
    setArrowVector(state, action) {
      state.arrowVector = action.payload;
    }
  }
})

export const { setBubbleShot, setArrowVector } = bubbleSlice.actions;

export const selectBubbleShot = (state) => state.bubble.shot;

export default bubbleSlice.reducer;