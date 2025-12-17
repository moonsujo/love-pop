import { BOX_HEIGHT, BOX_WIDTH } from "./constants"

export default function Level() {

  // get bubbles
  const bubbles = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ] // replace with state selector when implemented
  const bubbleRadius = 1

  return <>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((bubble, index) => {
        return <mesh 
        position-x={ - (BOX_WIDTH/2) + index * 2 * bubbleRadius + rowIndex % 2 * bubbleRadius } 
        position-y={ 10 - rowIndex * 2 * bubbleRadius }
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
  </>
}