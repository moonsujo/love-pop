import { createSlice } from "@reduxjs/toolkit";
import { levelHeartBubbles } from "../../levels/heart";
import { BUBBLE_RADIUS, COLORS, NUM_BUBBLES_EVEN, Y_GAP } from "../../constants";

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: {
    shot: false,
    arrowVector: [0, 1, 0],
    bubbles: levelHeartBubbles,
    bubblesLoaded: [
      { color: 'red' }, 
      { color: 'pink' }
    ],
    attachedBubble: { row: null, col: null, color: null }
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
    loadNextBubble(state) {
      state.bubblesLoaded.shift();
      const remainingColors = new Set();
      for (let i = 0; i < state.bubbles.length; i++) {
        for (let j = 0; j < state.bubbles[i].length; j++) {
          const bubble = state.bubbles[i][j];
          if (bubble) {
            remainingColors.add(bubble.color);
          }
        }
      }
      state.bubblesLoaded.push({
        color: Array.from(remainingColors)[Math.floor(Math.random() * remainingColors.size)]
      });
    },
    addBubbleRow(state) {
      const isEvenRow = state.bubbles.length % 2 === 0;
      const newRow = new Array(isEvenRow ? NUM_BUBBLES_EVEN : NUM_BUBBLES_ODD)
      state.bubbles.push(newRow);
    },
    attachBubble(state, action) {
      const { attachedRow, attachedCol, attachPosition, attachColor } = action.payload;
      console.log('ATTACH BUBBLE IN SLICE at row', attachedRow, 'col', attachedCol);
      if (attachedRow > state.bubbles.length) {
        // add new row
        const isEvenRow = attachedRow % 2 === 0;
        const newRow = new Array(isEvenRow ? NUM_BUBBLES_EVEN : NUM_BUBBLES_ODD);
        state.bubbles.push(newRow);
      }
      state.bubbles[attachedRow][attachedCol] = {
        position: { ...attachPosition },
        color: attachColor
      }
    },
    popBubbles(state, action) {
      function searchMatchingBubblesHelper(row, col, color) {
        return searchMatchingBubbles(row, col, new Set(), [], color)
      }

      function searchMatchingBubbles(row, col, visited=new Set(), matchingBubbles=[], color) {
        console.log("SEARCHING BUBBLES AT ROW", row, "COL", col)
        // out of bounds
        if (row < 0 || row >= state.bubbles.length || !state.bubbles[row]) return matchingBubbles
        if (col < 0 || col >= state.bubbles[row].length || !state.bubbles[row][col]) return matchingBubbles
        
        const key = `${row},${col}`
        if (visited.has(key)) return matchingBubbles
        visited.add(key)

        // DFS to find all connected bubbles of the same color
        const targetColor = state.bubbles[row][col].color
        console.log("TARGET COLOR:", targetColor, "SEARCH COLOR:", color)
        if (targetColor !== color) return matchingBubbles
        matchingBubbles.push([row, col])

        const directionsEven = [
          [-1, 1], [0, 1],
          [-1, 0], [1, 0],
          [-1, -1], [0, -1]
        ]

        const directionsOdd = [
          [0, 1], [1, 1],
          [-1, 0], [1, 0],
          [0, -1], [1, -1]
        ]
        
        if (row % 2 === 0) {
          for (const [dc, dr] of directionsEven) {
            const newCol = col + dc
            const newRow = row + dr
            searchMatchingBubbles(newRow, newCol, visited, matchingBubbles, color)
          }
        } else {
          for (const [dc, dr] of directionsOdd) {
            const newCol = col + dc
            const newRow = row + dr
            searchMatchingBubbles(newRow, newCol, visited, matchingBubbles, color)
          }
        }
        return matchingBubbles
      }

      const { row, col, color } = action.payload;
      const matchingBubbles = searchMatchingBubblesHelper(row, col, color);
      console.log("POPPING BUBBLES:", matchingBubbles);
      for (const [row, col] of matchingBubbles) {
        state.bubbles[row][col] = null; // remove bubble
      }
    }
  }
})

export const { setBubbleShot, setArrowVector, setBubblesLoaded, popBubbles, loadNextBubble, attachBubble, addBubbleRow,  } = bubbleSlice.actions;

export const selectBubbleShot = (state) => state.bubble.shot;

export default bubbleSlice.reducer;