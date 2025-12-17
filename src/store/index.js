import { configureStore } from '@reduxjs/toolkit';
import bubbleReducer from './slices/bubbleSlice.js';

const store = configureStore({
  reducer: {
    bubble: bubbleReducer,
  },
})

export default store;