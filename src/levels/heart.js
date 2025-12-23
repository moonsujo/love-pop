import { BUBBLE_RADIUS, Y_GAP } from "../constants";

// pinned to the left top corner of the box
export const levelHeartBubbles = [
  [ 
    { 
      position: { 
        x: 0 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: 1 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible',
      hasPhoto: false
    }, 
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible', 
      hasPhoto: false
    }, 
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible',
      hasPhoto: false 
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible',
      hasPhoto: false 
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible',
      hasPhoto: false 
    },
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: 1 * Y_GAP
      }, 
      color: 'invisible',
      hasPhoto: false 
    },
  ],
  [ 
    null, 
    { 
      position: { 
        x: 1 * 2 * BUBBLE_RADIUS, 
        y: 0 * 2 * BUBBLE_RADIUS
      }, 
      color: 'red',
      hasPhoto: true,
      index: 17
    }, 
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS, 
        y: 0 * 2 * BUBBLE_RADIUS
      }, 
      color: 'red',
      hasPhoto: true,
      index: 5
    }, 
    null, 
    null, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS, 
        y: 0 * 2 * BUBBLE_RADIUS
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 28
    }, 
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS, 
        y: 0 * 2 * BUBBLE_RADIUS
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 11
    },
    null 
  ],
  [ 
    { 
      position: { 
        x: 0 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -1 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 0
    }, 
    { 
      position: { 
        x: 1 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -1 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 22
    }, 
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -1 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 8
    }, 
    null, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -1 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 30
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -1 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 14
    },
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -1 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 2
    },
  ],
  [ 
    { 
      position: { 
        x: 0 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 25
    }, 
    { 
      position: { 
        x: 1 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 19
    }, 
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 6
    }, 
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 29
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 12
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 3
    }, 
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 23
    },
    { 
      position: { 
        x: 7 * 2 * BUBBLE_RADIUS, 
        y: -2 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 9
    },
  ],
  [ 
    { 
      position: { 
        x: 0 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 26
    }, 
    { 
      position: { 
        x: 1 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 16
    }, 
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 1
    }, 
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 20
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 13
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 27
    },
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS + BUBBLE_RADIUS, 
        y: -3 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 10
    },
  ],
  [ 
    null, 
    { 
      position: { 
        x: 1 * 2 * BUBBLE_RADIUS, 
        y: -4 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 7
    }, 
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS, 
        y: -4 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 24
    }, 
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS, 
        y: -4 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 15
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS, 
        y: -4 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 4
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS, 
        y: -4 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 21
    }, 
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS, 
        y: -4 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 18
    }, 
    null 
  ],
  [ 
    null,
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -5 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 30
    }, 
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -5 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 15
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -5 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 25
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -5 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 7
    }, 
    { 
      position: { 
        x: 6 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -5 * Y_GAP
      }, 
      color: 'orange',
      hasPhoto: true,
      index: 17
    }, 
    null,
  ],
  [ 
    null, 
    null,
    { 
      position: { 
        x: 2 * 2 * BUBBLE_RADIUS, 
        y: -6 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 6
    }, 
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS, 
        y: -6 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 11
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS, 
        y: -6 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 19
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS, 
        y: -6 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 3
    }, 
    null,
    null 
  ],
  [ 
    null,
    null,
    { 
      position: { 
        x: 3 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -7 * Y_GAP
      }, 
      color: 'purple',
      hasPhoto: true,
      index: 23
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -7 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 9
    }, 
    { 
      position: { 
        x: 5 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -7 * Y_GAP
      }, 
      color: 'pink',
      hasPhoto: true,
      index: 26
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
        x: 3 * 2 * BUBBLE_RADIUS, 
        y: -8 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 16
    }, 
    { 
      position: { 
        x: 4 * 2 * BUBBLE_RADIUS, 
        y: -8 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 1
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
        x: 4 * 2 * BUBBLE_RADIUS - BUBBLE_RADIUS, 
        y: -9 * Y_GAP
      }, 
      color: 'red',
      hasPhoto: true,
      index: 20
    }, 
    null,
    null,
    null,
  ],
];