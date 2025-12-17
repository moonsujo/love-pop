import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBubbleShot } from "./store/slices/bubbleSlice"

export default function Shooter(){

  const dispatch = useDispatch()
  const bubbleShot = useSelector((state) => state.bubble.shot)
  const [ subscribeKeys, getKeys ] = useKeyboardControls()
  const bubble = useRef()

  const shootBubble = () => {
    console.log("SHOOT BUBBLE!")
    dispatch(setBubbleShot(true))
  }

  useEffect(() => {
    subscribeKeys(
      (state) => state.shoot,
      (value) => {
        if(value){
          shootBubble()
        }
      }
    )
  }, [])

  useFrame(()=>{
    // update bubble position based on 'bubble flying' state
    // if bubble flying = true, move bubble up the screen
    // if bubble flying = false, reset bubble position to shooter
    if (bubbleShot) {
      console.log("MOVING BUBBLE UP")
      bubble.current.position.y += 0.5
      if (bubble.current.position.y > 25) { 
        dispatch(setBubbleShot(false))
      }
      // add to an array
    } else {
      // reset bubble position to shooter
      bubble.current.position.y = -25
    }
  })
  
  return <mesh ref={bubble} position={[0, -25, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
  </mesh>
}