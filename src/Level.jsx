import { BOX_HEIGHT, BOX_WIDTH, BUBBLE_RADIUS } from "./constants"
import { useSelector } from "react-redux"

export default function Level({ scale=1 }) {

  // get bubbles
  // 8, 7, 8
  const bubbles = useSelector((state) => state.bubble.bubbles)

  return <group scale={scale}>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((_bubble, index) => {
        return <mesh 
        position-x={ - (BOX_WIDTH/2) + index * (2 * BUBBLE_RADIUS) + (rowIndex % 2) * BUBBLE_RADIUS + BUBBLE_RADIUS } 
        position-y={ BOX_HEIGHT/2 - BUBBLE_RADIUS - rowIndex * 2 * BUBBLE_RADIUS }
        key={index}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
      </mesh>
      })
    ))}

    <mesh receiveShadow scale={ [BOX_WIDTH, BOX_HEIGHT, 1] }>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
    </mesh>
  </group>
}