import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBubbleShot, setArrowVector } from "./store/slices/bubbleSlice"
import { BOX_WIDTH, BOX_HEIGHT, BUBBLE_RADIUS } from "./constants"
import { bubbleMaterial, sphereGeometry } from "./Optimizations"
import { RigidBody } from "@react-three/rapier"

export default function Shooter(){

  const dispatch = useDispatch()
  const bubbleShot = useSelector((state) => state.bubble.shot)
  const arrowVector = useSelector((state) => state.bubble.arrowVector)
  const bubbles = useSelector((state) => state.bubble.bubbles)
  const [ subscribeKeys, getKeys ] = useKeyboardControls()
  const bubble = useRef()
  const arrow = useRef()

  const shootBubble = () => {
    console.log("SHOOT BUBBLE!")
    dispatch(setBubbleShot(true))
  }

  useEffect(() => {
    const unsubscribeShoot = subscribeKeys(
      (state) => state.shoot,
      (value) => {
        if(value){
          shootBubble()
        }
      }
    )
    return () => {
      unsubscribeShoot()
    }
  }, [])

  const bubbleOrigin = [0, -(BOX_HEIGHT / 2) + 2, 0]
  useFrame(()=>{
    // update bubble position based on 'bubble flying' state
    // if bubble flying = true, move bubble up the screen
    // if bubble flying = false, reset bubble position to shooter
    if (bubbleShot) {
      bubble.current.setNextKinematicTranslation({ 
        x: bubble.current.translation().x + arrowVector[0] * 0.5, 
        y: bubble.current.translation().y + arrowVector[1] * 0.5, 
        z: bubble.current.translation().z 
      })

        // collision with left wall
        // collision with right wall
        // collision with top wall
        // collision with another ball
        
        // dispatch(setArrowVector([arrowVector[0] * -1, arrowVector[1], 0]))
        // dispatch(setBubbleShot(false))

    } else {
      // reset bubble position to shooter
      bubble.current.setNextKinematicTranslation({ 
        x: bubbleOrigin[0], 
        y: bubbleOrigin[1], 
        z: bubbleOrigin[2] 
      })

      // turn arrow left or right
      const { left, right } = getKeys()
      if (left) {
        const leftTurnLimit = Math.PI/3
        if (arrow.current.rotation.z < leftTurnLimit) {
          arrow.current.rotation.z += 0.02
        }
      } else if (right) {
        const rightTurnLimit = -Math.PI/3
        if (arrow.current.rotation.z > rightTurnLimit) {
          arrow.current.rotation.z -= 0.02
        }
      }
      // get angle based on rotation
      const angle = arrow.current.rotation.z + Math.PI / 2 // arrow points up initially

      // calculate vector based on angle
      const vectorX = Math.cos(angle)
      const vectorY = Math.sin(angle)
      dispatch(setArrowVector([vectorX, vectorY, 0]))
    }
  })

  // length: 2
  const arrowLength = 2
  function Arrow({ position=[0, 0, 0] }) {
    return <group position={position}>
      <mesh position={[0, arrowLength, 0]} scale={[0.5, arrowLength, 0.5]}>
        <coneGeometry args={[1, 1, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh scale={[0.1, arrowLength, 0.1]}>
        <cylinderGeometry args={[1, 1, 1, 32]} />
        <meshStandardMaterial color="brown" />
      </mesh>
    </group>
  }
  
  function collisionEnter() {
    console.log("COLLISION DETECTED")
    dispatch(setBubbleShot(false))
  }
  
  return <>
    <RigidBody type="kinematicPosition" colliders="ball" ref={bubble} onCollisionEnter={ collisionEnter }>
      <mesh 
        geometry={sphereGeometry} 
        material={bubbleMaterial}
      />
    </RigidBody>
    <group name='arrow' ref={arrow} rotation={[0, 0, 0]} position={bubbleOrigin}>
      <Arrow position={[0, arrowLength / 2, 0]} />
    </group>
  </>
}