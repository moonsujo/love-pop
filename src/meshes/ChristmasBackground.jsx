import { useGLTF } from '@react-three/drei'

export function ChristmasBackground(props) {
  const { nodes, materials } = useGLTF('models/christmas-scene.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.756, 0.707, -0.241]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials['vray Christmas Tree 7']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials['vray Christmas Tree 3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_2.geometry}
          material={materials['vray Christmas Tree 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_3.geometry}
          material={materials['vray Christmas Tree 16']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_4.geometry}
          material={materials['vray Christmas Tree 17']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_5.geometry}
          material={materials['vray Christmas Tree 6']}
        />
      </group>
      <group position={[-0.786, 1.174, -0.391]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009.geometry}
          material={materials['vray New Year b16']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_1.geometry}
          material={materials['vray New Year b7']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_2.geometry}
          material={materials['vray Christmas Tree 46']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_3.geometry}
          material={materials['vray New Year b28']}
        />
      </group>
      <group position={[0.369, 0.982, 0.169]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials['vray Christmas Tree 3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials['vray Christmas Tree 4']}
        />
      </group>
      <group position={[-0.761, 0.465, -0.479]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials['vray New Year b67']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials['vray New Year b68']}
        />
      </group>
      <group position={[0.444, 1.002, 0.122]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials['vray Christmas Tree 22']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials['vray Christmas Tree 23']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials['vray Christmas Tree 24']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_1.geometry}
        material={materials['vray Wall 2']}
        position={[-0.101, 1.21, -0.527]}
        scale={0.001}
      />
      <group position={[-0.764, 0.215, -0.458]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010.geometry}
          material={materials['vray New Year b7']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_1.geometry}
          material={materials['vray New Year b12']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_2.geometry}
          material={materials['vray New Year b13']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_3.geometry}
          material={materials['vray New Year b14']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_4.geometry}
          material={materials['vray New Year b15']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_5.geometry}
          material={materials['vray New Year b16']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_6.geometry}
          material={materials['vray New Year b6']}
        />
      </group>
      <group position={[-0.793, 0.103, 0.862]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008.geometry}
          material={materials['vray Christmas Tree 52']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_1.geometry}
          material={materials['vray Christmas Tree 53']}
        />
      </group>
      <group position={[-0.751, 1.551, -0.449]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials['vray Christmas Tree 3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials['vray Christmas Tree 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_2.geometry}
          material={materials['vray Christmas Tree 5']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_3.geometry}
          material={materials['vray Christmas Tree 6']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_4.geometry}
          material={materials['vray Christmas Tree 7']}
        />
      </group>
      <group position={[-0.645, 0.05, 1.04]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials['vray Christmas Tree 27']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials['vray Christmas Tree 31']}
        />
      </group>
      <group position={[0.398, 1.007, 0.301]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006.geometry}
          material={materials['vray Christmas Tree 27']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_1.geometry}
          material={materials['vray Christmas Tree 28']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_2.geometry}
          material={materials['vray Christmas Tree 29']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_3.geometry}
          material={materials['vray Christmas Tree 30']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_4.geometry}
          material={materials['vray Christmas Tree 31']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_5.geometry}
          material={materials['vray Christmas Tree 34']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_6.geometry}
          material={materials['vray Christmas Tree 37']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_7.geometry}
          material={materials['vray Christmas Tree 41']}
        />
      </group>
      <group position={[-0.074, 2.12, -0.101]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012.geometry}
          material={materials['vray Star 9']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_1.geometry}
          material={materials['vray Star 10']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_2.geometry}
          material={materials['vray Star 11']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_3.geometry}
          material={materials['vray Star 12']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_4.geometry}
          material={materials['vray Star 13']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_5.geometry}
          material={materials['vray Star 14']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh012_6.geometry}
          material={materials['vray Star 15']}
        />
      </group>
      <group position={[-0.08, 0.118, 0.033]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007.geometry}
          material={materials['vray Christmas Tree 44']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_1.geometry}
          material={materials['vray Christmas Tree 45']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_2.geometry}
          material={materials['vray Christmas Tree 46']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_3.geometry}
          material={materials['vray Christmas Tree 47']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_4.geometry}
          material={materials['vray Christmas Tree 48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_5.geometry}
          material={materials['vray New Year b7']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_6.geometry}
          material={materials['vray New Year b5']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/christmas-scene.glb')
