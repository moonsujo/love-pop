import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

function App() {

  return (
    <KeyboardControls
      map={ [
        { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'right', keys: ['ArrowRight', 'KeyD'] },
        { name: 'shoot', keys: ['ArrowUp', 'Space'] },
      ] }
    >
      <Canvas
        shadows
      >
        <Experience/>
      </Canvas>
    </KeyboardControls>
  )
}

export default App
