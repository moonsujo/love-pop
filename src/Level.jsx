import { RigidBody, BallCollider } from "@react-three/rapier"
import { BOX_HEIGHT, BOX_WIDTH, BUBBLE_RADIUS } from "./constants"
import { useSelector } from "react-redux"
import * as THREE from 'three'
import { bubbleMaterial, sphereGeometry } from "./Optimizations"

export default function Level({ scale=1 }) {

  // get bubbles
  // 8, 7, 8
  const bubbles = useSelector((state) => state.bubble.bubbles)

  return <group scale={scale}>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((_bubble, index) => {
        return <RigidBody 
        colliders={false} 
        gravityScale={0} key={index + '-' + rowIndex}
        position-x={ - (BOX_WIDTH/2) + index * (2 * BUBBLE_RADIUS) + (rowIndex % 2) * BUBBLE_RADIUS + BUBBLE_RADIUS } 
        position-y={ BOX_HEIGHT/2 - BUBBLE_RADIUS - rowIndex * 2 * BUBBLE_RADIUS }

        >
          <BallCollider args={ [BUBBLE_RADIUS] } mass={0} />
          <mesh 
            geometry={sphereGeometry}
            material={bubbleMaterial}
            
            key={index}>
          </mesh>
        </RigidBody>
      })
    ))}

    <mesh receiveShadow scale={ [BOX_WIDTH, BOX_HEIGHT, 1] }>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
    </mesh>
  </group>
}