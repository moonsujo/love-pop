import { BOX_HEIGHT, BOX_WIDTH, BUBBLE_RADIUS, LEVEL_OFFSET_X, LEVEL_OFFSET_Y, Y_GAP } from "./constants"
import { useSelector } from "react-redux"
import { bubbleMaterials, sphereGeometry } from "./Optimizations"
import { GiftBowtie } from "./meshes/GiftBowtie"
import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import { Image, Text3D } from "@react-three/drei"
import Heart from "./Heart"

export default function Level({ position=[0,0,0], scale=1 }) {

  const bubbles = useSelector((state) => state.bubble.bubbles)
  const numPenalty = useSelector((state) => state.bubble.numPenalty)
  const gameState = useSelector((state) => state.bubble.gameState)

  const frameWidth = 1
  const [springs, api] = useSpring(() => ({
    from: { 
      boxScale: [BOX_WIDTH, BOX_HEIGHT, 1],
      boxPosition: [0, 0, -1],
      boxFrameVerticalScale: [1, 1, 1],
      boxFrameTopPosition: [0, (BOX_HEIGHT / 2) + frameWidth/2, 0],
      boxFrameLeftPosition: [-8 - frameWidth/2, 0, 0],
      boxFrameRightPosition: [8 + frameWidth/2, 0, 0],
      restartButtonScale: [0,0,0],
      boxPhotoScale: [0, 0, 0]
    }
  }))

  useEffect(() => {
    const previousNumPenalty = numPenalty === 0 ? 0 : numPenalty - 1;
    api.start({
      from: {
        boxScale: [BOX_WIDTH, BOX_HEIGHT - previousNumPenalty * (Y_GAP), 1],
        boxPosition: [0, -previousNumPenalty * (Y_GAP) / 2, 0],
        boxFrameVerticalScale: [1, 1 - previousNumPenalty * (Y_GAP) / BOX_HEIGHT, 1],
        boxFrameTopPosition: [0, (BOX_HEIGHT / 2) + frameWidth/2 - previousNumPenalty * (Y_GAP), 0],
        boxFrameLeftPosition: [-8 - frameWidth/2, -previousNumPenalty * (Y_GAP/2), 0],
        boxFrameRightPosition: [8 + frameWidth/2, -previousNumPenalty * (Y_GAP/2), 0],
      },
      to: {
        boxFrameVerticalScale: [1, 1 - numPenalty * (Y_GAP) / BOX_HEIGHT, 1],
        boxScale: [BOX_WIDTH, BOX_HEIGHT - numPenalty * (Y_GAP), 1],
        boxPosition: [0, -numPenalty * (Y_GAP/2), 0],
        boxFrameTopPosition: [0, (BOX_HEIGHT / 2) + frameWidth/2 - numPenalty * (Y_GAP), 0],
        boxFrameLeftPosition: [-8 - frameWidth/2, -numPenalty * (Y_GAP/2), 0],
        boxFrameRightPosition: [8 + frameWidth/2, -numPenalty * (Y_GAP/2), 0],
      }
    })
  }, [numPenalty])

  useEffect(() => {
    api.start({
      restartButtonScale: gameState === 'lost' ? [1, 1, 1] : [0, 0, 0],
    })
  }, [gameState])

  function handleRestartPointerEnter(e) {
    e.stopPropagation()
    document.body.style.cursor = 'pointer';
  }
  function handleRestartPointerLeave(e) {
    e.stopPropagation()
    document.body.style.cursor = 'default';
  }
  function handleRestartPointerDown(e) {
    e.stopPropagation()
    console.log('Restart button clicked!');
    window.location.reload();
  }

  useEffect(() => {
    api.start({
      from: { boxPhotoScale: [0, 0, 0] },
      to: { boxPhotoScale: [1, 1, 1] },
      delay: 500
    })
  }, [])

  return <group scale={scale} position={position}>
    { bubbles.map((bubbleRow, rowIndex) => (
      bubbleRow.map((bubble, index) => {
        if (bubble) {
          return <group
            position-x={ bubble.position.x + LEVEL_OFFSET_X } 
            position-y={ bubble.position.y + LEVEL_OFFSET_Y }
            position-z={ rowIndex === 0 ? -5 : 0}
            key={`${rowIndex}-${index}`}
          >
            <mesh 
              geometry={sphereGeometry}
              material={bubbleMaterials[bubble.color]}
            />
            {bubble.hasPhoto && <Heart color={bubble.color} position={[0.15, 0.25, 1]} />}
          </group>
        }
      })
    ))}

    <group name='background'>
      <animated.mesh receiveShadow scale={ springs.boxScale } position={springs.boxPosition}>
        <planeGeometry />
        <meshStandardMaterial color="#F0B0FF" transparent opacity={0.6}/>
      </animated.mesh>
      <animated.mesh name='box-frame-left' position={springs.boxFrameLeftPosition} scale={springs.boxFrameVerticalScale}>
        <boxGeometry args={ [frameWidth, BOX_HEIGHT, 1] } />
        <meshStandardMaterial color="brown" />
      </animated.mesh>
      <animated.mesh name='box-frame-right' position={springs.boxFrameRightPosition} scale={springs.boxFrameVerticalScale}>
        <boxGeometry args={ [frameWidth, BOX_HEIGHT, 1] } />
        <meshStandardMaterial color="brown" />
      </animated.mesh>
      <animated.mesh position={springs.boxFrameTopPosition}>
        <mesh name='box-frame-top'>
          <boxGeometry args={ [BOX_WIDTH, frameWidth, 1] } />
          <meshStandardMaterial color="brown" />
        </mesh>
        <GiftBowtie position={[0, -13.2, 0]} scale={[0.015, 0.04, 0.02]} rotation={[-Math.PI/64, Math.PI/6, 0]}/>
      </animated.mesh>
      <mesh name='box-frame-bottom' position={[0, -(BOX_HEIGHT / 2) - frameWidth/2, 0]}>
        <boxGeometry args={ [BOX_WIDTH, frameWidth, 1] } />
        <meshStandardMaterial color="brown" />
      </mesh>
      {/* <animated.mesh scale={springs.boxPhotoScale} position={[0, 0, -1]}>
        <Image url='images/ninja.JPG' scale={[BOX_WIDTH, BOX_HEIGHT, 1]}/>
      </animated.mesh> */}
      <animated.group name='restart' position={[0, -4, 3]} scale={springs.restartButtonScale}>
        <mesh scale={[10, 10, 1]} onPointerEnter={e=>handleRestartPointerEnter(e)} onPointerLeave={e=>handleRestartPointerLeave(e)} onPointerDown={e=>handleRestartPointerDown(e)}>
          <planeGeometry args={[1, 1]}/>
          <meshStandardMaterial color='#ba5700'/>
        </mesh>
        <Text3D
          font={'fonts/sriracha.json'}
          size={0.8} 
          height={0.5} 
          curveSegments={15} 
          bevelEnabled 
          bevelThickness={0.03} 
          bevelSize={0.01} 
          bevelOffset={0} 
          bevelSegments={5} 
          position={[-3.5, 3, 0]}
        >
          {`Bebe...\nI wrote a letter\nfor you...\nRestart?`}
          <meshStandardMaterial color={'#e2ffa5'} />
        </Text3D>
      </animated.group>
      { gameState === 'won' && <Text3D
        font={'fonts/sriracha.json'}
        size={2.5} 
        height={0.5} 
        curveSegments={15} 
        bevelEnabled 
        bevelThickness={0.03} 
        bevelSize={0.01} 
        bevelOffset={0} 
        bevelSegments={5} 
        position={[-5, 0, 3]}
      >
        Clear!
        <meshStandardMaterial color={'#ea935c'} />
      </Text3D>}
    </group>
  </group>
}