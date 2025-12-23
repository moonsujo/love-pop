import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gift2(props) {
  const { nodes, materials } = useGLTF('models/gift2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box03.geometry}
        material={materials.Box03}
        position={[0.553, 0.159, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bow03.geometry}
        material={materials.Bow03}
        position={[0.557, 0.333, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbon03.geometry}
        material={materials.Ribbon03}
        position={[0.552, 0.16, 0]}
      />
    </group>
  )
}

useGLTF.preload('models/gift2.glb')