export const BOX_WIDTH = 16
export const BOX_HEIGHT = 35
export const BUBBLE_RADIUS = 1
export const Y_GAP = (Math.sin(Math.PI / 3) * 2 * BUBBLE_RADIUS) // vertical gap for close rows
export const NUM_BUBBLES_TO_REMOVE = 3
export const COLORS = ['red', 'pink', 'orange', 'purple']
export const NUM_BUBBLES_EVEN = 8
export const NUM_BUBBLES_ODD = NUM_BUBBLES_EVEN - 1
export const DIRECTIONS_EVEN = [
  [-1, 1], [0, 1],
  [-1, 0], [1, 0],
  [-1, -1], [0, -1]
]
export const DIRECTIONS_ODD = [
  [0, 1], [1, 1],
  [-1, 0], [1, 0],
  [0, -1], [1, -1]
]