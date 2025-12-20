import { createSlice } from "@reduxjs/toolkit";
import { levelHeartBubbles } from "../../levels/heart";
import { COLORS } from "../../constants";


const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: {
    shot: false,
    arrowVector: [0, 1, 0],
    bubbles: levelHeartBubbles,
    bubblesLoaded: [
      { color: COLORS[Math.floor(Math.random() * COLORS.length)]}, 
      { color: COLORS[Math.floor(Math.random() * COLORS.length)]}
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