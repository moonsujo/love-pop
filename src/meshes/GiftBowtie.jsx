
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function GiftBowtie(props) {
  const { nodes, materials } = useGLTF('models/Christmas Gift.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.g_Cube_1_Extrude_NURBS.geometry}
      >
        <meshBasicMaterial color="brown" side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.g_Cube_1_Extrude_NURBS_1.geometry}
      >
        <meshBasicMaterial color="brown" side={THREE.DoubleSide}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('models/Christmas Gift.glb')