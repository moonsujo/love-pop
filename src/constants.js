export const BOX_WIDTH = 16
export const BOX_HEIGHT = 32
export const BUBBLE_RADIUS = 1
export const Y_GAP = (Math.sin(Math.PI / 3) * 2 * BUBBLE_RADIUS) // vertical gap for close rows
export const NUM_BUBBLES_TO_REMOVE = 3
export const COLORS = ['red', 'pink', 'orange', 'purple']
export const NUM_BUBBLES_EVEN = 8
export const NUM_BUBBLES_ODD = NUM_BUBBLES_EVEN - 1
export const NUM_SHOTS_PENALTY = 3
export const NUM_ROWS_LOST = 16;
// export const NUM_ROWS_LOST = Math.floor((BOX_HEIGHT - BUBBLE_RADIUS) / Y_GAP);
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
export const LEVEL_OFFSET_X = -(BOX_WIDTH / 2) + BUBBLE_RADIUS
export const LEVEL_OFFSET_Y = (BOX_HEIGHT / 2) - BUBBLE_RADIUS

export const PHOTO_HEIGHT = 10
export const PHOTO_WIDTH = 10
export const NUM_PHOTO_ROWS = 4
export const NUM_PHOTO_COLUMNS = 8
export const PHOTO_X_SPACE = -0.1 * PHOTO_WIDTH // negative value for overlap
export const BOX_POSITION = [38, 0, 0]
export const PHOTO_POSITION = [-10, 0, 0]

// didn't work when I put it in a separate file
export const photos = [
    { url: "images/aquariumKiss.JPG", row: 2, col: 4 },
    { url: "images/christmasPhotoOp.JPG", row: 9, col: 3 },
    { url: "images/colorfulHeart.JPG", row: 8, col: 3 },
    { url: "images/fingerHearts.JPG", row: 2, col: 5 },
    { url: "images/flight.JPG", row: 5, col: 4 },
    { url: "images/flowerGarden.JPG", row: 4, col: 4 },
    { url: "images/gogiThe.JPG", row: 5, col: 6 },
    { url: "images/gogiWrap.JPG", row: 1, col: 2 },
    { url: "images/handHeart.JPG", row: 6, col: 5 },
    { url: "images/hollywoodHalloween.JPG", row: 2, col: 1 },
    { url: "images/iHeartRadio.JPG", row: 8, col: 2 },
    { url: "images/laCity.JPG", row: 2, col: 0 },
    { url: "images/lafc.JPG", row: 4, col: 3 },
    { url: "images/museumOfIllusions2.JPG", row: 7, col: 2 },
    { url: "images/newJeansPotobox.JPG", row: 3, col: 2 },
    { url: "images/pastry.JPG", row: 4, col: 2 },
    { url: "images/photoStudio.JPG", row: 4, col: 0 },
    { url: "images/eyebrow.JPG", row: 5, col: 1 },
    { url: "images/reflection.JPG", row: 7, col: 3 },
    { url: "images/rgbHeart.JPG", row: 1, col: 1 },
    { url: "images/runClub.JPG", row: 3, col: 6 },
    { url: "images/sevenMagicMountains.JPG", row: 7, col: 4 },
    { url: "images/shrek.JPG", row: 6, col: 2 },
    { url: "images/disneyland.JPG", row: 2, col: 2 },
    { url: "images/sojuFrog.JPG", row: 3, col: 5 },
    { url: "images/tudum.JPG", row: 5, col: 2 },
    { url: "images/vegasEiffelTower.JPG", row: 8, col: 4 },
    { url: "images/wangoTangoPhoto.JPG", row: 6, col: 3 },
    { url: "images/whaleWatching.JPG", row: 4, col: 6 },
    { url: "images/zooKiss.JPG", row: 7, col: 5 },
    { url: "images/pixelatedMV.JPG", row: 6, col: 1 },
]