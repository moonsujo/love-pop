import { createSlice } from "@reduxjs/toolkit";

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: {
    shot: false,
  },
  reducers: {
    setBubbleShot(state, action) {
      state.shot = action.payload;
    }
  }
})

export const { setBubbleShot } = bubbleSlice.actions;

export const selectBubbleShot = (state) => state.bubble.shot;

export default bubbleSlice.reducer;