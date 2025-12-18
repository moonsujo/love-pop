import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBubbleShot, setArrowVector } from "./store/slices/bubbleSlice"
import { BOX_HEIGHT } from "./constants"

export default function Shooter(){

  const dispatch = useDispatch()
  const bubbleShot = useSelector((state) => state.bubble.shot)
  const arrowVector = useSelector((state) => state.bubble.arrowVector)
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
      if (bubble.current.position.y > BOX_HEIGHT / 2) { 
        dispatch(setBubbleShot(false))
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
        arrow.current.rotation.z += 0.02
      } else if (right) {
        arrow.current.rotation.z -= 0.02
      }
      // get angle based on rotation
      const angle = arrow.current.rotation.z + Math.PI / 2
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