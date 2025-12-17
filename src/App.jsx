import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { KeyboardControls } from '@react-three/drei'

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
