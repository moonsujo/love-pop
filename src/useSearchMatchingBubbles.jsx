import { useSelector } from "react-redux"
import { DIRECTIONS_EVEN, DIRECTIONS_ODD } from "./constants"

export default function useSearchMatchingBubbles() {
  const bubbles = useSelector((state) => state.bubble.bubbles)

  function searchMatchingBubblesHelper(row, col, color) {
    return searchMatchingBubbles(row, col, new Set(), [], color)
  }

  // Set works with strings; array with elements of equal value are different objects
  function searchMatchingBubbles(row, col, visited=new Set(), matchingBubbles=[], color) {
    // out of bounds
    if (row < 0 || row >= bubbles.length || !bubbles[row]) return matchingBubbles
    if (col < 0 || col >= bubbles[row].length || !bubbles[row][col]) return matchingBubbles
    
    const key = `${row},${col}`
    if (visited.has(key)) return matchingBubbles
    visited.add(key)

    // DFS to find all connected bubbles of the same color
    const targetColor = bubbles[row][col].color
    console.log("TARGET COLOR:", targetColor, "SEARCH COLOR:", color)
    if (targetColor !== color) return matchingBubbles
    matchingBubbles.push([row, col])
    
    if (row % 2 === 0) {
      for (const [dc, dr] of DIRECTIONS_EVEN) {
        const newCol = col + dc
        const newRow = row + dr
        searchMatchingBubbles(newRow, newCol, visited, matchingBubbles, color)
      }
    } else {
      for (const [dc, dr] of DIRECTIONS_ODD) {
        const newCol = col + dc
        const newRow = row + dr
        searchMatchingBubbles(newRow, newCol, visited, matchingBubbles, color)
      }
    }
    return matchingBubbles
  }

  return { searchMatchingBubblesHelper }
}
