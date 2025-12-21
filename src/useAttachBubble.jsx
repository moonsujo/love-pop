import { useSelector } from "react-redux";
import { BUBBLE_RADIUS, Y_GAP } from "./constants";

export default function useAttachBubble() {
  const bubbles = useSelector((state) => state.bubble.bubbles);

  function attachBubbleLocation(dx, dy, row, col, color) {
    // assign bubble to index in array based on dx dy
    let attachedRow, attachedCol, attachPosition;
    const attachColor = color;
    const inivisibleRowShift = 1;


    function attachRight() {
      attachedRow = row;
      attachedCol = col + 1;
      console.log('ATTACH RIGHT, row', row, 'col', col);
      attachPosition = {
        x: bubbles[row][col].position.x + 2 * BUBBLE_RADIUS,
        y: bubbles[row][col].position.y
      }
    }
    function attachRightTop() {
      attachedRow = row-1;
      attachedCol = row % 2 === 1 ? col : col + 1;
      console.log('ATTACH RIGHT TOP, row', row, 'col', col);
      attachPosition = {
        x: bubbles[row][col].position.x + BUBBLE_RADIUS,
        y: -(row-1 - inivisibleRowShift) * Y_GAP
      }
    }
    function attachLeft() {
      attachedRow = row;
      attachedCol = col - 1;
      console.log('ATTACH LEFT, row', row, 'col', col);
      attachPosition = {
        x: bubbles[row][col].position.x - 2 * BUBBLE_RADIUS,
        y: bubbles[row][col].position.y
      }
    }
    function attachLeftTop() {
      attachedRow = row-1;
      attachedCol = row % 2 === 1 ? col - 1 : col;
      console.log('ATTACH LEFT TOP, row', row, 'col', col);
      attachPosition = {
        x: bubbles[row][col].position.x - BUBBLE_RADIUS,
        y: -(row-1 - inivisibleRowShift) * Y_GAP
      }
    }
    function attachLeftBottom() {
      attachedRow = row+1;
      attachedCol = row % 2 === 1 ? col - 1 : col;
      console.log('ATTACH LEFT BOTTOM, row', row, 'col', col);
      attachPosition = {
        x: bubbles[row][col].position.x - BUBBLE_RADIUS,
        y: -(row+1 - inivisibleRowShift) * Y_GAP
      }
    }
    function attachRightBottom() {
      attachedRow = row+1;
      attachedCol = row % 2 === 1 ? col : col + 1;
      console.log('ATTACH RIGHT BOTTOM, row', row, 'col', col);
      attachPosition = {
        x: bubbles[row][col].position.x + BUBBLE_RADIUS,
        y: -(row+1 - inivisibleRowShift) * Y_GAP
      }
    }

    if (dx >= 0 && dy >= 0) {
      // quadrant 1
      if (Math.atan(dy/dx) <= Math.PI / 6) {
        attachRight()
      } else {
        attachRightTop()
      }
    } else if (dx <= 0 && dy >= 0) {
      // quadrant 2
      if (Math.atan(dy/-dx) <= Math.PI / 6) {
        attachLeft()
      } else {
        attachLeftTop()
      }
    } else if (dx <= 0 && dy <= 0) {
      // quadrant 3
      if (Math.atan(-dy/-dx) <= Math.PI / 6) {
        attachLeft()
      } else {
        attachLeftBottom()
      }
    } else if (dx >= 0 && dy <= 0) {
      // quadrant 4
      if (Math.atan(-dy/dx) <= Math.PI / 6) {
        attachRight()
      } else {
        attachRightBottom()
      }
    }
    
    return { attachedRow, attachedCol, attachPosition, attachColor };
  }
  return { attachBubbleLocation };
}