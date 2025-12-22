import { useGLTF } from '@react-three/drei'

export function Gift0(props) {
  const { nodes, materials } = useGLTF('models/gift0.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box01.geometry}
        material={materials.Box01}
        position={[0, 0.125, 0]}
      />
      <mesh
        geometry={nodes.Ribbon01.geometry}
        material={materials.Ribbon01}
        position={[0, 0.103, 0]}
      />
      <mesh
        geometry={nodes.Bow01.geometry}
        material={materials.Bow01}
        position={[0.002, 0.207, 0.014]}
      />
      <group position={[-0.086, 0.189, 0.09]}>
        <mesh
          geometry={nodes.Tag01_1.geometry}
          material={materials.Tag01}
        />
        <mesh
          geometry={nodes.Tag01_2.geometry}
          material={materials.String01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/gift0.glb')