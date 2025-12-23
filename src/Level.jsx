import { BOX_HEIGHT, BOX_WIDTH, BUBBLE_RADIUS, LEVEL_OFFSET_X, LEVEL_OFFSET_Y } from "./constants"
import { useSelector } from "react-redux"
import { bubbleMaterials, sphereGeometry } from "./Optimizations"
import { GiftBowtie } from "./meshes/GiftBowtie"

export default function Level({ position=[0,0,0], scale=1 }) {

  const bubbles = useSelector((state) => state.bubble.bubbles)

  const frameWidth = 1
  return <group scale={scale} position={position}>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((bubble, index) => {
        if (bubble) {
          return <mesh 
            geometry={sphereGeometry}
            material={bubbleMaterials[bubble.color]}
            position-x={ bubble.position.x + LEVEL_OFFSET_X } 
            position-y={ bubble.position.y + LEVEL_OFFSET_Y }
            position-z={ rowIndex === 0 ? -5 : 0}
            key={`${rowIndex}-${index}`}>
          </mesh>
        }
      })
    ))}

    <group name='background'>
      <mesh receiveShadow scale={ [BOX_WIDTH, BOX_HEIGHT, 1] }>
        <planeGeometry />
        <meshStandardMaterial color="#F0B0FF" transparent opacity={0.5}/>
      </mesh>
      <mesh name='box-frame-left' position={[-8 - frameWidth/2, 0, 0]}>
        <boxGeometry args={ [frameWidth, BOX_HEIGHT, 1] } />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh name='box-frame-right' position={[8 + frameWidth/2, 0, 0]}>
        <boxGeometry args={ [frameWidth, BOX_HEIGHT, 1] } />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh name='box-frame-top' position={[0, (BOX_HEIGHT / 2) + frameWidth/2, 0]}>
        <boxGeometry args={ [BOX_WIDTH + 2 * frameWidth, frameWidth, 1] } />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh name='box-frame-bottom' position={[0, -(BOX_HEIGHT / 2) - frameWidth/2, 0]}>
        <boxGeometry args={ [BOX_WIDTH + 2 * frameWidth, frameWidth, 1] } />
        <meshStandardMaterial color="brown" />
      </mesh>
      <GiftBowtie position={[0, BOX_HEIGHT / 2 - 12.7, 0]} scale={[0.015, 0.04, 0.02]} rotation={[-Math.PI/64, Math.PI/6, 0]}/>
    </group>
  </group>
}