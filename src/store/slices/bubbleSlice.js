import { createSlice } from "@reduxjs/toolkit";
import { levelHeartBubbles } from "../../levels/heart";
import { DIRECTIONS_EVEN, DIRECTIONS_ODD, NUM_BUBBLES_EVEN, NUM_BUBBLES_ODD, NUM_BUBBLES_TO_REMOVE, photos, Y_GAP } from "../../constants";

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
    attachedBubble: { row: null, col: null, color: null },
    photos: photos,
    numPoppedPhotos: 0
    // refactor to take in photos from public folder or external source
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
      for (let i = 1; i < state.bubbles.length; i++) { // start from 1 to skip top row
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
      const isEvenRow = state.bubbles.length % 2 === 1;
      const newRow = new Array(isEvenRow ? NUM_BUBBLES_EVEN : NUM_BUBBLES_ODD).fill(null);
      state.bubbles.push(newRow);
    },
    attachBubble(state, action) {
      const { attachedRow, attachedCol, attachPosition, attachColor } = action.payload;
      console.log('ATTACH BUBBLE IN SLICE at row', attachedRow, 'col', attachedCol, 'position', attachPosition, 'color', attachColor);
      state.bubbles[attachedRow][attachedCol] = {
        position: { ...attachPosition },
        color: attachColor,
        hasPhoto: false,
        index: null
      }
    },
    popBubbles(state, action) {

      function searchMatchingBubblesHelper(row, col, color) {
        return searchMatchingBubbles(row, col, new Set(), [], color)
      }

      function searchMatchingBubbles(row, col, visited=new Set(), matchingBubbles=[], color) {
        // out of bounds
        if (row < 1 || row >= state.bubbles.length || !state.bubbles[row]) return matchingBubbles
        if (col < 0 || col >= state.bubbles[row].length || !state.bubbles[row][col]) return matchingBubbles
        
        const key = `${row},${col}`
        if (visited.has(key)) return matchingBubbles
        visited.add(key)

        // DFS to find all connected bubbles of the same color
        const targetColor = state.bubbles[row][col].color
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
        
        if (row % 2 === 1) {
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
      if (matchingBubbles.length < NUM_BUBBLES_TO_REMOVE) return; // need at least 3 to pop
      for (const [row, col] of matchingBubbles) {
        const poppedBubble = state.bubbles[row][col]
        poppedBubble.row = row;
        poppedBubble.col = col;
        state.bubbles[row][col] = null; // remove bubble
        if (poppedBubble.hasPhoto) {
          state.photos[poppedBubble.photoIndex].popped = true
        }
      }
    },
    dropBubbles(state) {
      // BFS from top to find connected bubbles
      // passthrough 1: find all bubbles connected to the top
        // keep track of visited bubbles
      // passthrough 2: remove all bubbles that are not connected to the top
        // remove unvisited bubbles
      const visited = new Set();
      function bfs(row, col) {
        // initialize queue
        // push to the end
        // pop from the front
        // order visits the bubbles that are next to the first
        const queue = [[row, col]];
        while (queue.length > 0) {
          const [r, c] = queue.shift();
          const key = `${r}, ${c}`;
          if (visited.has(key)) continue;
          visited.add(key);
          const directions = r % 2 === 1 ? DIRECTIONS_EVEN : DIRECTIONS_ODD;
          for (const [dc, dr] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            if (newRow >= 1 && newRow < state.bubbles.length &&
                newCol >= 0 && newCol < state.bubbles[newRow].length &&
                state.bubbles[newRow][newCol]) {
              queue.push([newRow, newCol]);
            }
          }
        }
      }
      // start BFS from all bubbles in the top row
      for (let col = 0; col < state.bubbles[0].length; col++) {
        if (state.bubbles[0][col]) {
          bfs(0, col);
        }
      }
      // remove unvisited bubbles
      for (let i = 0; i < state.bubbles.length; i++) {
        for (let j = 0; j < state.bubbles[i].length; j++) {
          const key = `${i}, ${j}`;
          if (state.bubbles[i][j] && !visited.has(key)) {
            state.bubbles[i][j] = null;
          }
        }
      }
    }
  }
})

export const { setBubbleShot, dropBubbles, setArrowVector, setBubblesLoaded, popBubbles, loadNextBubble, attachBubble, addBubbleRow,  } = bubbleSlice.actions;

export const selectBubbleShot = (state) => state.bubble.shot;

export default bubbleSlice.reducer;