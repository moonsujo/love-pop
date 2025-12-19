import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBubbleShot, setArrowVector } from "./store/slices/bubbleSlice"
import { BOX_WIDTH, BOX_HEIGHT, BUBBLE_RADIUS } from "./constants"

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
      console.log("MOVING BUBBLE UP", arrowVector)
      bubble.current.position.x += arrowVector[0] * 0.5
      bubble.current.position.y += arrowVector[1] * 0.5
      // bubble.current.position.y += 0.5
      // if (bubble.current.position.y > BOX_HEIGHT / 2) { 
      //   dispatch(setBubbleShot(false))
      // }
      const leftBoundary = -BOX_WIDTH / 2
      const rightBoundary = BOX_WIDTH / 2
      const leftBoundaryCollision = bubble.current.position.x - BUBBLE_RADIUS < leftBoundary
      const rightBoundaryCollision = bubble.current.position.x + BUBBLE_RADIUS > rightBoundary
      const topBoundaryCollision = bubble.current.position.y + BUBBLE_RADIUS > BOX_HEIGHT / 2
      if (leftBoundaryCollision || rightBoundaryCollision) {
        // change direction
        dispatch(setArrowVector([arrowVector[0] * -1, arrowVector[1], 0]))
      } else if (topBoundaryCollision) {
        // reset bubble
        dispatch(setBubbleShot(false))
      } else {
        const collision = false // other bubble 
        for (let i = 0; i < bubbles.length; i++) {
          for (let j = 0; j < bubbles[i].length; j++) {
            // check collision with bubble at bubbles[i][j]
            
          }
        }
        if (collision) {
          dispatch(setBubbleShot(false))
        }
      }
      // add to an array
    } else {
      // reset bubble position to shooter
      bubble.current.position.x = bubbleOrigin[0]
      bubble.current.position.y = bubbleOrigin[1]
      bubble.current.position.z = bubbleOrigin[2]

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
  
  return <>
    <mesh ref={bubble} position={bubbleOrigin}>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
    </mesh>
    <group name='arrow' ref={arrow} rotation={[0, 0, 0]} position={bubbleOrigin}>
      <Arrow position={[0, arrowLength / 2, 0]} />
    </group>
  </>
}