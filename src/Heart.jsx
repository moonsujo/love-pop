import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Heart({ color = 'pink', ...props }) {
  const meshRef = useRef()
  
  const colorMap = {
    red: 'red',
    pink: '#FF00C3',
    orange: '#FF8C00',
    purple: '#8000FF',
  }
  const materialColor = colorMap[color] || color

  const shape = useMemo(() => {
    const x = 0, y = 0;
    const heartShape = new THREE.Shape();
    // Draw a heart shape
    heartShape.moveTo( x + 0.5, y + 0.5 );
    heartShape.bezierCurveTo( x + 0.5, y + 0.5, x + 0.4, y, x, y );
    heartShape.bezierCurveTo( x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7 );
    heartShape.bezierCurveTo( x - 0.6, y + 1.1, x - 0.2, y + 1.54, x + 0.5, y + 1.9 );
    heartShape.bezierCurveTo( x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7 );
    heartShape.bezierCurveTo( x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y );
    heartShape.bezierCurveTo( x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5 );
    return heartShape;
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating/scaling animation
      const t = state.clock.getElapsedTime()
      meshRef.current.scale.setScalar(0.3 + Math.sin(t * 3) * 0.05)
      meshRef.current.rotation.y = Math.sin(t * 2) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} {...props} rotation={[0, 0, Math.PI]}>
      <extrudeGeometry args={[shape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2 }]} />
      <meshStandardMaterial color={materialColor} emissive={materialColor} emissiveIntensity={0.8} />
    </mesh>
  )
}
