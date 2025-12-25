import { BUBBLE_RADIUS, Y_GAP } from "../constants";

// pinned to the left top corner of the box

// optimization: 
// put all elements with position
// select certain bubbles to have bubbles
// select certain bubbles to have photos
export const calculatePositionX = (col, isEvenRow) => {
  if (isEvenRow) { // number of bubbles is odd
    return col * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS;
  } else {
    return col * 2 * BUBBLE_RADIUS;
  }
}
export const calculatePositionY = (row) => {  
  return (-row + 1) * Y_GAP; // push one row up for the invisible row
}
const levelHeartBubbles = [
  [ 
    { 
      position: { 
        x: calculatePositionX(0, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(1, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible',
      hasPhoto: false,
    }, 
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible', 
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(5, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible',
      hasPhoto: false
    },
    { 
      position: { 
        x: calculatePositionX(6, true),
        y: calculatePositionY(0)
      }, 
      color: 'invisible',
      hasPhoto: false
    },
  ],
  [ 
    null, 
    { 
      position: { 
        x: calculatePositionX(1, false),
        y: calculatePositionY(1)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 19
    }, 
    { 
      position: { 
        x: calculatePositionX(2, false),
        y: calculatePositionY(1)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 7
    }, 
    null, 
    null, 
    { 
      position: { 
        x: calculatePositionX(5, false),
        y: calculatePositionY(1)
      }, 
      color: 'pink',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(6, false),
        y: calculatePositionY(1)
      }, 
      color: 'pink',
      hasPhoto: false
    },
    null 
  ],
  [ 
    { 
      position: { 
        x: calculatePositionX(0, true),
        y: calculatePositionY(2)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 11
    }, 
    { 
      position: { 
        x: calculatePositionX(1, true),
        y: calculatePositionY(2)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 9
    }, 
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(2)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 23
    }, 
    null, 
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(2)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 0
    }, 
    { 
      position: { 
        x: calculatePositionX(5, true),
        y: calculatePositionY(2)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 3
    },
    { 
      position: { 
        x: calculatePositionX(6, true),
        y: calculatePositionY(2)
      }, 
      color: 'pink',
      hasPhoto: false,
    },
  ],
  [ 
    { 
      position: { 
        x: calculatePositionX(0, false),
        y: calculatePositionY(3)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(1, false),
        y: calculatePositionY(3)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(2, false),
        y: calculatePositionY(3)
      }, 
      color: 'orange',
      hasPhoto: true,
      photoIndex: 14
    }, 
    { 
      position: { 
        x: calculatePositionX(3, false),
        y: calculatePositionY(3)
      }, 
      color: 'orange',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(4, false),
        y: calculatePositionY(3)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(5, false),
        y: calculatePositionY(3)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 24
    }, 
    { 
      position: { 
        x: calculatePositionX(6, false),
        y: calculatePositionY(3)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 20
    },
    { 
      position: { 
        x: calculatePositionX(7, false),
        y: calculatePositionY(3)
      }, 
      color: 'red',
      hasPhoto: false
    },
  ],
  [ 
    { 
      position: { 
        x: calculatePositionX(0, true),
        y: calculatePositionY(4)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 16
    }, 
    { 
      position: { 
        x: calculatePositionX(1, true),
        y: calculatePositionY(4)
      }, 
      color: 'orange',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(4)
      }, 
      color: 'orange',
      hasPhoto: true,
      photoIndex: 15
    }, 
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(4)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 12
    }, 
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(4)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 5
    }, 
    { 
      position: { 
        x: calculatePositionX(5, true),
        y: calculatePositionY(4)
      }, 
      color: 'red',
      hasPhoto: false
    },
    { 
      position: { 
        x: calculatePositionX(6, true),
        y: calculatePositionY(4)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 28
    },
  ],
  [ 
    null, 
    { 
      position: { 
        x: calculatePositionX(1, false),
        y: calculatePositionY(5)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 17
    }, 
    { 
      position: { 
        x: calculatePositionX(2, false),
        y: calculatePositionY(5)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 25
    }, 
    { 
      position: { 
        x: calculatePositionX(3, false),
        y: calculatePositionY(5)
      }, 
      color: 'red',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(4, false),
        y: calculatePositionY(5)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 4
    }, 
    { 
      position: { 
        x: calculatePositionX(5, false),
        y: calculatePositionY(5)
      }, 
      color: 'orange',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(6, false),
        y: calculatePositionY(5)
      }, 
      color: 'orange',
      hasPhoto: true,
      photoIndex: 6
    }, 
    null 
  ],
  [ 
    null,
    { 
      position: { 
        x: calculatePositionX(1, true),
        y: calculatePositionY(6)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 30
    }, 
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(6)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 22
    }, 
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(6)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 27
    }, 
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(6)
      }, 
      color: 'orange',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: calculatePositionX(5, true),
        y: calculatePositionY(6)
      }, 
      color: 'orange',
      hasPhoto: true,
      photoIndex: 8
    }, 
    null,
  ],
  [ 
    null, 
    null,
    { 
      position: { 
        x: calculatePositionX(2, false),
        y: calculatePositionY(7)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 13
    }, 
    { 
      position: { 
        x: calculatePositionX(3, false),
        y: calculatePositionY(7)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 18
    }, 
    { 
      position: { 
        x: calculatePositionX(4, false),
        y: calculatePositionY(7)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 21
    }, 
    { 
      position: { 
        x: calculatePositionX(5, false),
        y: calculatePositionY(7)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 29
    }, 
    null,
    null 
  ],
  [ 
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(8)
      }, 
      color: 'purple',
      hasPhoto: true,
      photoIndex: 10
    }, 
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(8)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 2
    }, 
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(8)
      }, 
      color: 'pink',
      hasPhoto: true,
      photoIndex: 26
    }, 
    null,
    null,
  ],
  [ 
    null, 
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(3, false),
        y: calculatePositionY(9)
      }, 
      color: 'red',
      hasPhoto: true,
      photoIndex: 1
    }, 
    { 
      position: { 
        x: calculatePositionX(4, false),
        y: calculatePositionY(9)
      }, 
      color: 'red',
      hasPhoto: false
    }, 
    null,
    null,
    null 
  ],
  [ 
    null,
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(10)
      }, 
      color: 'red',
      hasPhoto: false
    }, 
    null,
    null,
    null,
  ],
];

const levelHeartInfo = {
    numShotsToPenalty: 7,
    bubbles: levelHeartBubbles,
    colors: ['red', 'pink', 'orange', 'purple'],
    level: 0
}

export { levelHeartInfo };