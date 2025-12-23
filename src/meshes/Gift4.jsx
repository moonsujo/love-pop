import { useGLTF } from '@react-three/drei'

export function Gift4(props) {
  const { nodes, materials } = useGLTF('models/gift4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box05.geometry}
        material={materials.Box05}
        position={[1.139, 0.098, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbon05.geometry}
        material={materials.Ribbon05}
        position={[1.139, 0.098, -0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bow05.geometry}
        material={materials.Bow05}
        position={[1.137, 0.215, -0.005]}
      />
    </group>
  )
}

useGLTF.preload('models/gift4.glb')
