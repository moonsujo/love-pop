import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gift1(props) {
  const { nodes, materials } = useGLTF('models/gift1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.306, 0.22, 0]}>
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials.Bow02_Inner}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.Bow02_Outer}
        />
      </group>
      <mesh
        geometry={nodes.Box02.geometry}
        material={materials.Box02}
        position={[0.306, 0.098, 0]}
      />
      <group position={[0.306, 0.097, 0]}>
        <mesh
          geometry={nodes.Ribbon02_1.geometry}
          material={materials.Ribbon02_Inner}
        />
        <mesh
          geometry={nodes.Ribbon02_2.geometry}
          material={materials.Ribbon02_Outer}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/gift1.glb')
