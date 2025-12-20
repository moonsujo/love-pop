import { BOX_HEIGHT, BOX_WIDTH, BUBBLE_RADIUS } from "./constants"
import { useSelector } from "react-redux"
import { bubbleMaterials, sphereGeometry } from "./Optimizations"

export default function Level({ scale=1 }) {

  // get bubbles
  // 8, 7, 8
  const bubbles = useSelector((state) => state.bubble.bubbles)

  return <group scale={scale}>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((bubble, index) => {
        if (bubble) {
          return <mesh 
            geometry={sphereGeometry}
            material={bubbleMaterials[bubble.color]}
            position-x={ bubble.position.x - (BOX_WIDTH / 2) + BUBBLE_RADIUS } 
            position-y={ bubble.position.y + (BOX_HEIGHT / 2) - BUBBLE_RADIUS }
            key={index}>
          </mesh>
        }
        
      })
    ))}

    <mesh receiveShadow scale={ [BOX_WIDTH, BOX_HEIGHT, 1] }>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
    </mesh>
  </group>
}