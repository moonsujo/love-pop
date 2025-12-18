import { BOX_HEIGHT, BOX_WIDTH } from "./constants"

export default function Level({ scale=1 }) {

  // get bubbles
  // 8, 7, 8
  const bubbles = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ] // replace with state selector when implemented
  const bubbleRadius = 1

  return <group scale={scale}>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((_bubble, index) => {
        return <mesh 
        position-x={ - (BOX_WIDTH/2) + index * (2 * bubbleRadius) + (rowIndex % 2) * bubbleRadius + bubbleRadius } 
        position-y={ BOX_HEIGHT/2 - bubbleRadius - rowIndex * 2 * bubbleRadius }
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