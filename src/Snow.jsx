import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
uniform float uTime;
uniform float uSize;
attribute float aScale;
attribute vec3 aRandomness;

void main() {
  vec3 pos = position;
  
  // Fall animation
  float height = 20.0;
  float fallSpeed = 1.0 + aRandomness.y; 
  
  // Offset y by time
  pos.y = pos.y - uTime * fallSpeed;
  
  // Wrap around
  pos.y = mod(pos.y + height * 0.5, height) - height * 0.5;
  
  // Horizontal sway
  pos.x += sin(uTime * 2.0 + aRandomness.x * 10.0) * 0.1;
  pos.z += cos(uTime * 2.0 + aRandomness.z * 10.0) * 0.1;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  // Size attenuation
  gl_PointSize = uSize * aScale;
}
`

const fragmentShader = `
uniform vec3 uColor;

void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = 0.05 / distanceToCenter - 0.1;
  
  gl_FragColor = vec4(uColor, strength);
}
`

export default function Snow() {
  const materialRef = useRef()
  const count = 1000
  
  const { positions, scales, randomness } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const randomness = new Float32Array(count * 3)
    
    for(let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 35
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      scales[i] = Math.random()
      
      randomness[i * 3 + 0] = Math.random()
      randomness[i * 3 + 1] = Math.random()
      randomness[i * 3 + 2] = Math.random()
    }
    
    return { positions, scales, randomness }
  }, [])

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <points position={[0, 0, 5]} scale={5}> 
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={count}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aRandomness"
          count={count}
          array={randomness}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('#ffffff') },
            uSize: { value: 20.0 }
        }}
      />
    </points>
  )
}
