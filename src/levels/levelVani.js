import { calculatePositionX, calculatePositionY } from "./heart";

// pinned to the left top corner of the box

// optimization: 
// put all elements with position
// select certain bubbles to have bubbles
// select certain bubbles to have photos

// num of bubbles in first row after invisible row is 9
// so even rows have 8 bubbles, odd rows have 9 bubbles
// adjust box width based on that
const levelVaniBubbles = [
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
    { 
      position: { 
        x: calculatePositionX(0, false),
        y: calculatePositionY(1)
      }, 
      color: 'pink',
      hasPhoto: false,
    },
    null,
    null,
    {
      position: { 
        x: calculatePositionX(3, false),
        y: calculatePositionY(1)
      }, 
      color: 'orange',
      hasPhoto: false
    },
    null,
    { 
      position: { 
        x: calculatePositionX(5, false),
        y: calculatePositionY(1)
      }, 
      color: 'orange',
      hasPhoto: false
    },
    null,
    null,
  ],
  [ 
    { 
      position: { 
        x: calculatePositionX(0, true),
        y: calculatePositionY(2)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(2)
      }, 
      color: 'orange',
      hasPhoto: false
    }, 
    null, 
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(2)
      }, 
      color: 'pink',
      hasPhoto: false,
    }, 
    { 
      position: { 
        x: calculatePositionX(5, true),
        y: calculatePositionY(2)
      }, 
      color: 'pink',
      hasPhoto: false,
    },
    null
  ],
  [ 
    null,
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
      color: 'red',
      hasPhoto: false
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(4, false),
        y: calculatePositionY(3)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(6, false),
        y: calculatePositionY(3)
      }, 
      color: 'purple',
      hasPhoto: false
    },
    null,
  ],
  [ 
    null,
    { 
      position: { 
        x: calculatePositionX(1, true),
        y: calculatePositionY(4)
      }, 
      color: 'green',
      hasPhoto: false
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(4)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(6, true),
        y: calculatePositionY(4)
      }, 
      color: 'red',
      hasPhoto: false
    },
  ],
  [
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(2, false),
        y: calculatePositionY(5)
      }, 
      color: 'black',
      hasPhoto: false
    },
    null,
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(6, false),
        y: calculatePositionY(5)
      }, 
      color: 'black',
      hasPhoto: false
    },
    null,
  ],
  [ 
    null,
    { 
      position: { 
        x: calculatePositionX(1, true),
        y: calculatePositionY(6)
      }, 
      color: 'pink',
      hasPhoto: false,
    }, 
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(4, true),
        y: calculatePositionY(6)
      }, 
      color: 'orange',
      hasPhoto: false
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(6, true),
        y: calculatePositionY(6)
      }, 
      color: 'purple',
      hasPhoto: false
    }, 
  ],
  [ 
    null, 
    { 
      position: { 
        x: calculatePositionX(1, false),
        y: calculatePositionY(7)
      }, 
      color: 'pink',
      hasPhoto: false,
    },
    { 
      position: { 
        x: calculatePositionX(2, false),
        y: calculatePositionY(7)
      }, 
      color: 'red',
      hasPhoto: false,
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(4, false),
        y: calculatePositionY(7)
      }, 
      color: 'orange',
      hasPhoto: false,
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(6, false),
        y: calculatePositionY(7)
      }, 
      color: 'purple',
      hasPhoto: false,
    }, 
    null,
  ],
  [ 
    { 
      position: { 
        x: calculatePositionX(0, true),
        y: calculatePositionY(8)
      }, 
      color: 'purple',
      hasPhoto: false,
    },
    null,
    { 
      position: { 
        x: calculatePositionX(2, true),
        y: calculatePositionY(8)
      }, 
      color: 'red',
      hasPhoto: false,
    },
    { 
      position: { 
        x: calculatePositionX(3, true),
        y: calculatePositionY(8)
      }, 
      color: 'green',
      hasPhoto: false,
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(5, true),
        y: calculatePositionY(8)
      }, 
      color: 'pink',
      hasPhoto: false,
    }, 
    null
  ],
  [ 
    { 
      position: { 
        x: calculatePositionX(0, false),
        y: calculatePositionY(9)
      }, 
      color: 'purple',
      hasPhoto: false,
    },
    null,
    null,
    { 
      position: { 
        x: calculatePositionX(3, false),
        y: calculatePositionY(9)
      }, 
      color: 'green',
      hasPhoto: false,
    }, 
    null,
    { 
      position: { 
        x: calculatePositionX(5, false),
        y: calculatePositionY(9)
      }, 
      color: 'green',
      hasPhoto: false,
    }, 
    null,
    null 
  ],
];

const levelVaniInfo = {
    numShotsToPenalty: 7,
    bubbles: levelVaniBubbles,
    colors: ['red', 'pink', 'orange', 'purple', 'green', 'black'],
    level: 1
}

export { levelVaniInfo };