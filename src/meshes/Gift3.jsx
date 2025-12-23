import { useGLTF } from '@react-three/drei'

export function Gift3(props) {
  const { nodes, materials } = useGLTF('models/gift3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bow07.geometry}
        material={materials.Bow07}
        position={[0.268, 0.041, 0.177]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box07.geometry}
        material={materials.Box07}
        position={[0.305, 0.015, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbon07.geometry}
        material={materials.Ribbon07}
        position={[0.286, 0.013, 0.178]}
      />
    </group>
  )
}

useGLTF.preload('models/gift3.glb')
