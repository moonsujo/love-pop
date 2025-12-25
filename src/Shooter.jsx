import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBubbleShot, setArrowVector, setBubblesLoaded, popBubbles, loadNextBubble, attachBubble, addBubbleRow, dropBubbles, checkWinCondition } from "./store/slices/bubbleSlice"
import { BOX_WIDTH, BOX_HEIGHT, BUBBLE_RADIUS, NUM_BUBBLES_TO_REMOVE } from "./constants"
import { bubbleMaterials, sphereGeometry } from "./Optimizations"
import useAttachBubble from "./useAttachBubble"

export default function Shooter({ position=[0,0,0], scale=1 }) {

  const dispatch = useDispatch()
  const bubbleShot = useSelector((state) => state.bubble.shot)
  const arrowVector = useSelector((state) => state.bubble.arrowVector)
  const bubbles = useSelector((state) => state.bubble.bubbles)
  const bubblesLoaded = useSelector((state) => state.bubble.bubblesLoaded)
  const gameState = useSelector((state) => state.bubble.gameState)
  const { attachBubbleLocation } = useAttachBubble()
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
        if(value) {
          shootBubble()
        }
      }
    )
    return () => {
      unsubscribeShoot()
    }
  }, [])

  const bubbleOrigin = [0, -(BOX_HEIGHT / 2) + 2, 0]
  useFrame((state, delta)=>{
    if (bubbleShot && gameState === 'playing') {
      // move bubble in arrowVector direction
      const speed = 60
      bubble.current.position.x += arrowVector[0] * speed * delta
      bubble.current.position.y += arrowVector[1] * speed * delta

      // check for collision with walls or other bubbles
      const leftBoundary = -BOX_WIDTH / 2
      const rightBoundary = BOX_WIDTH / 2
      const leftBoundaryCollision = bubble.current.position.x - BUBBLE_RADIUS < leftBoundary
      const rightBoundaryCollision = bubble.current.position.x + BUBBLE_RADIUS > rightBoundary
      if (leftBoundaryCollision || rightBoundaryCollision) {
        // change direction
        dispatch(setArrowVector([arrowVector[0] * -1, arrowVector[1], 0]))
      } else {
        let collision = false // other bubble 
        for (let i = 0; i < bubbles.length; i++) {
          for (let j = 0; j < bubbles[i].length; j++) {
            // check collision with bubble at bubbles[i][j]
            const otherBubble = bubbles[i][j]
            if (!otherBubble) continue
            const dx = bubble.current.position.x - otherBubble.position.x + (BOX_WIDTH / 2) - BUBBLE_RADIUS
            const dy = bubble.current.position.y - otherBubble.position.y - (BOX_HEIGHT / 2) + BUBBLE_RADIUS
            
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 2 * BUBBLE_RADIUS) {
              collision = true
              // attach bubble
              const { 
                attachedRow, 
                attachedCol, 
                attachPosition, 
                attachColor 
              } = attachBubbleLocation(dx, dy, i, j, bubblesLoaded[0].color)

              if (attachedRow >= bubbles.length) {
                // add new row
                dispatch(addBubbleRow())
              }

              dispatch(attachBubble({
                attachedRow, 
                attachedCol, 
                attachPosition, 
                attachColor
              }))

              dispatch(popBubbles({ row: attachedRow, col: attachedCol, color: bubblesLoaded[0].color }))
              dispatch(dropBubbles())
              dispatch(checkWinCondition())

              break
            }
          }
          if (collision) { break }
        }
        if (collision) {
          dispatch(setBubbleShot(false))
          dispatch(loadNextBubble())
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
      if (gameState !== 'playing') return
      const rotationSpeed = 1.2
      if (left) {
        const leftTurnLimit = Math.PI/3
        if (arrow.current.rotation.z < leftTurnLimit) {
          arrow.current.rotation.z += rotationSpeed * delta
        }
      } else if (right) {
        const rightTurnLimit = -Math.PI/3
        if (arrow.current.rotation.z > rightTurnLimit) {
          arrow.current.rotation.z -= rotationSpeed * delta
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
  
  return <group scale={scale} position={position}>
    <mesh ref={bubble} position={bubbleOrigin} geometry={sphereGeometry} material={bubbleMaterials[bubblesLoaded[0].color]} />
    <group name='arrow' ref={arrow} rotation={[0, 0, 0]} position={bubbleOrigin}>
      <Arrow position={[0, arrowLength / 2, 0]} />
    </group>
  </group>
}