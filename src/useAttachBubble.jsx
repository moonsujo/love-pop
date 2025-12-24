import { useSelector } from "react-redux";
import { BUBBLE_RADIUS, Y_GAP } from "./constants";

export default function useAttachBubble() {
  const bubbles = useSelector((state) => state.bubble.bubbles);
  const numPenalty = useSelector((state) => state.bubble.numPenalty);

  // row and col are the bubble that was hit
  function attachBubbleLocation(dx, dy, row, col, color) {
    console.log('bubbles in useAttachBubble', bubbles, 'row, col', row, col, 'dx, dy', dx, dy);
    // assign bubble to index in array based on dx dy
    let attachedRow, attachedCol, attachPosition;
    const attachColor = color;
    const invisibleRowShift = 1;

    // console.log('attach bubble location', row, col, dx, dy);

    function attachRight() {
      console.log('attaching right');
      attachedRow = row;
      attachedCol = col + 1;
      attachPosition = {
        x: bubbles[row][col].position.x + 2 * BUBBLE_RADIUS,
        y: bubbles[attachedRow][col].position.y
      }
    }
    function attachRightTop() {
      console.log('attaching right top');
      attachedRow = row-1;
      attachedCol = row % 2 === 1 ? col : col + 1;
      attachPosition = {
        x: bubbles[row][col].position.x + BUBBLE_RADIUS,
        y: -(attachedRow - invisibleRowShift + numPenalty) * Y_GAP
      }
    }
    function attachLeft() {
      console.log('attaching left');
      attachedRow = row;
      attachedCol = col - 1;
      attachPosition = {
        x: bubbles[row][col].position.x - 2 * BUBBLE_RADIUS,
        y: bubbles[attachedRow][col].position.y
      }
    }
    function attachLeftTop() {
      console.log('attaching left top');
      attachedRow = row-1;
      attachedCol = row % 2 === 1 ? col - 1 : col;
      attachPosition = {
        x: bubbles[row][col].position.x - BUBBLE_RADIUS,
        y: -(attachedRow - invisibleRowShift + numPenalty) * Y_GAP
      }
    }
    function attachLeftBottom() {
      console.log('attaching left bottom');
      attachedRow = row+1;
      attachedCol = row % 2 === 1 ? col - 1 : col;
      attachPosition = {
        x: bubbles[row][col].position.x - BUBBLE_RADIUS,
        y: -(attachedRow - invisibleRowShift + numPenalty) * Y_GAP
      }
    }
    function attachRightBottom() {
      console.log('attaching right bottom');
      attachedRow = row+1;
      attachedCol = row % 2 === 1 ? col : col + 1;
      attachPosition = {
        x: bubbles[row][col].position.x + BUBBLE_RADIUS,
        y: -(attachedRow - invisibleRowShift + numPenalty) * Y_GAP
      }
    }

    if (dx >= 0 && dy >= 0) {
      // quadrant 1
      if (Math.atan(dy/dx) <= Math.PI / 6) {
        attachRight()
      } else if (row === 0) {
        attachRight()
      } else {
        attachRightTop()
      }
    } else if (dx <= 0 && dy >= 0) {
      // quadrant 2
      if (Math.atan(dy/-dx) <= Math.PI / 6) {
        attachLeft()
      } else if (row === 0) {
        attachLeft()
      } else {
        attachLeftTop()
      }
    } else if (dx <= 0 && dy <= 0) {
      // quadrant 3
      console.log('atan', Math.atan(-dy/-dx), "Math.PI/6", Math.PI/6);
      if (Math.abs(Math.atan(-dy/-dx)) < Math.PI / 6) {
        attachLeft()
      } else {
        attachLeftBottom()
      }
    } else if (dx >= 0 && dy <= 0) {
      // quadrant 4
      console.log('atan', Math.atan(-dy/dx), "Math.PI/6", Math.PI/6);
      if (Math.abs(Math.atan(-dy/dx)) <= Math.PI / 6) {
        attachRight()
      } else {
        attachRightBottom()
      }
    }
    
    return { attachedRow, attachedCol, attachPosition, attachColor };
  }
  return { attachBubbleLocation };
}