import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function ChristmasTree(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/christmas_tree_2.glb')

  const goldenBallMaterial = useRef(new THREE.MeshStandardMaterial({ color: '#FFD700', metalness: 0.7, roughness: 0.2 }))
  const redBallMaterial = useRef(new THREE.MeshStandardMaterial({ color: '#eb1d1d', metalness: 0.7, roughness: 0.2 }))
  const pinkBallMaterial = useRef(new THREE.MeshStandardMaterial({ color: '#b41ec2', metalness: 0.7, roughness: 0.2 }))
  
  // Three variations of currentMaterialRef
  const currentMaterialRef1 = useRef(goldenBallMaterial.current)
  const currentMaterialRef2 = useRef(redBallMaterial.current)
  const currentMaterialRef3 = useRef(pinkBallMaterial.current)
  
  // Helper function to get a random material ref
  const getRandomMaterialRef = () => {
    const materials = [currentMaterialRef1.current, currentMaterialRef2.current, currentMaterialRef3.current]
    return materials[Math.floor(Math.random() * materials.length)]
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="animFBX" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere001" position={[35.765, 98.43, 0]} scale={4.313}>
                  <mesh
                    name="Sphere001_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere001_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere002" position={[35.765, 98.43, 0]} scale={4.309}>
                  <mesh
                    name="Sphere002_Material_#41_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere002_Material_#41_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere003" position={[58.789, 39.938, 0]} scale={4.309}>
                  <mesh
                    name="Sphere003_Material_#31_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere003_Material_#31_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere004" position={[58.789, 39.938, 0]} scale={4.313}>
                  <mesh
                    name="Sphere004_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere004_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere005" position={[-26.047, 72.079, -45.749]} scale={4.313}>
                  <mesh
                    name="Sphere005_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere005_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere006" position={[-26.047, 72.079, -45.749]} scale={4.309}>
                  <mesh
                    name="Sphere006_Material_#33_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere006_Material_#33_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere007" position={[-49.167, 70.435, 8.21]} scale={4.309}>
                  <mesh
                    name="Sphere007_Material_#48_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere007_Material_#48_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere008" position={[-49.167, 70.435, 8.21]} scale={4.313}>
                  <mesh
                    name="Sphere008_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere008_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere009" position={[-18.806, 106.55, 30.538]} scale={4.313}>
                  <mesh
                    name="Sphere009_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere009_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere010" position={[-18.806, 106.55, 30.538]} scale={4.309}>
                  <mesh
                    name="Sphere010_Material_#42_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere010_Material_#42_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere011" position={[9.436, 143, -5.968]} scale={4.313}>
                  <mesh
                    name="Sphere011_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere011_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere012" position={[9.436, 143, -5.968]} scale={4.309}>
                  <mesh
                    name="Sphere012_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere012_03_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere013" position={[-1.598, 144.551, 8.882]} scale={4.309}>
                  <mesh
                    name="Sphere013_07_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere013_07_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere014" position={[-1.598, 144.551, 8.882]} scale={4.313}>
                  <mesh
                    name="Sphere014_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere014_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere015" position={[25.366, 98.234, 30.655]} scale={4.309}>
                  <mesh
                    name="Sphere015_07_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere015_07_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere016" position={[25.366, 98.234, 30.655]} scale={4.313}>
                  <mesh
                    name="Sphere016_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere016_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere017" position={[-19.1, 128.918, 0]} scale={4.309}>
                  <mesh
                    name="Sphere017_Material_#51_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere017_Material_#51_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere018" position={[-19.1, 128.918, 0]} scale={4.313}>
                  <mesh
                    name="Sphere018_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere018_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere019" position={[21.542, 129.514, -4.719]} scale={4.309}>
                  <mesh
                    name="Sphere019_Material_#34_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere019_Material_#34_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere020" position={[21.542, 129.514, -4.719]} scale={4.313}>
                  <mesh
                    name="Sphere020_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere020_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere021" position={[18.124, 40.45, 46.427]} scale={4.309}>
                  <mesh
                    name="Sphere021_Material_#35_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere021_Material_#35_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere022" position={[18.124, 40.45, 46.427]} scale={4.313}>
                  <mesh
                    name="Sphere022_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere022_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere023" position={[6.46, 93.273, -25.88]} scale={4.309}>
                  <mesh
                    name="Sphere023_07_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere023_07_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere024" position={[6.46, 93.273, -25.88]} scale={4.313}>
                  <mesh
                    name="Sphere024_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere024_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere025" position={[-37.052, 83.727, 15.597]} scale={4.309}>
                  <mesh
                    name="Sphere025_07_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere025_07_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere026" position={[-37.052, 83.727, 15.597]} scale={4.313}>
                  <mesh
                    name="Sphere026_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere026_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere027" position={[0.749, 82.745, -30.607]} scale={4.309}>
                  <mesh
                    name="Sphere027_Material_#49_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere027_Material_#49_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere028" position={[0.749, 82.745, -30.607]} scale={4.313}>
                  <mesh
                    name="Sphere028_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere028_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere029" position={[11.871, 116.516, 25.239]} scale={4.309}>
                  <mesh
                    name="Sphere029_Material_#52_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere029_Material_#52_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere030" position={[11.871, 116.516, 25.239]} scale={4.313}>
                  <mesh
                    name="Sphere030_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere030_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere031" position={[-34.512, 97.24, 19.295]} scale={4.309}>
                  <mesh
                    name="Sphere031_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere031_09_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere032" position={[-34.512, 97.24, 19.295]} scale={4.313}>
                  <mesh
                    name="Sphere032_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere032_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere033" position={[-16.762, 113.865, -16.902]} scale={4.309}>
                  <mesh
                    name="Sphere033_Material_#40_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere033_Material_#40_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere034" position={[-16.762, 113.865, -16.902]} scale={4.313}>
                  <mesh
                    name="Sphere034_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere034_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere035" position={[-55.27, 40, -8.469]} scale={4.313}>
                  <mesh
                    name="Sphere035_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere035_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere036" position={[-55.27, 40, -8.469]} scale={4.309}>
                  <mesh
                    name="Sphere036_Material_#44_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere036_Material_#44_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere037" position={[-31.887, 53.292, -33.839]} scale={4.313}>
                  <mesh
                    name="Sphere037_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere037_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere038" position={[-31.887, 53.292, -33.839]} scale={4.309}>
                  <mesh
                    name="Sphere038_Material_#37_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere038_Material_#37_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere039" position={[-31.108, 37.642, 39.88]} scale={4.313}>
                  <mesh
                    name="Sphere039_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere039_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere040" position={[-31.108, 37.642, 39.88]} scale={4.309}>
                  <mesh
                    name="Sphere040_Material_#36_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere040_Material_#36_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere041" position={[-17.098, 120.147, 12.189]} scale={4.313}>
                  <mesh
                    name="Sphere041_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere041_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere042" position={[-17.098, 120.147, 12.189]} scale={4.309}>
                  <mesh
                    name="Sphere042_Material_#54_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere042_Material_#54_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere043" position={[-0.125, 60.595, 37.254]} scale={4.313}>
                  <mesh
                    name="Sphere043_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere043_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere044" position={[-0.125, 60.595, 37.254]} scale={4.309}>
                  <mesh
                    name="Sphere044_Material_#30_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere044_Material_#30_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere045" position={[-44.965, 53.646, 12.698]} scale={4.313}>
                  <mesh
                    name="Sphere045_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere045_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere046" position={[-44.965, 53.646, 12.698]} scale={4.309}>
                  <mesh
                    name="Sphere046_Material_#29_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere046_Material_#29_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere047" position={[29.483, 102.112, 10.799]} scale={4.313}>
                  <mesh
                    name="Sphere047_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere047_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere048" position={[29.483, 102.112, 10.799]} scale={4.309}>
                  <mesh
                    name="Sphere048_Material_#46_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere048_Material_#46_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere049" position={[37.696, 58.302, -7.678]} scale={4.309}>
                  <mesh
                    name="Sphere049_Material_#39_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere049_Material_#39_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere050" position={[37.696, 58.302, -7.678]} scale={4.313}>
                  <mesh
                    name="Sphere050_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere050_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere051" position={[-4.338, 143.93, -5.53]} scale={4.309}>
                  <mesh
                    name="Sphere051_Material_#38_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere051_Material_#38_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere052" position={[-4.338, 143.93, -5.53]} scale={4.313}>
                  <mesh
                    name="Sphere052_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere052_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere053" position={[-20.194, 83.793, -24.929]} scale={4.313}>
                  <mesh
                    name="Sphere053_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere053_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere054" position={[-20.194, 83.793, -24.929]} scale={4.309}>
                  <mesh
                    name="Sphere054_Material_#47_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere054_Material_#47_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere055" position={[-0.255, 135.599, 13.851]} scale={4.309}>
                  <mesh
                    name="Sphere055_Material_#50_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere055_Material_#50_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere056" position={[-0.255, 135.599, 13.851]} scale={4.313}>
                  <mesh
                    name="Sphere056_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere056_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere057" position={[33.19, 53.69, -28.278]} scale={4.309}>
                  <mesh
                    name="Sphere057_Material_#45_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere057_Material_#45_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere058" position={[33.19, 53.69, -28.278]} scale={4.313}>
                  <mesh
                    name="Sphere058_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere058_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere059" position={[-33.771, 93.101, 1.333]} scale={4.309}>
                  <mesh
                    name="Sphere059_Material_#53_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere059_Material_#53_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere060" position={[-33.771, 93.101, 1.333]} scale={4.313}>
                  <mesh
                    name="Sphere060_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere060_01_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere061" position={[46.93, 81.017, -16.724]} scale={4.309}>
                  <mesh
                    name="Sphere061_Material_#32_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere061_Material_#32_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere062" position={[46.93, 81.017, -16.724]} scale={4.313}>
                  <mesh
                    name="Sphere062_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere062_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group
                  name="model"
                  position={[0, 81.108, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={88.888}>
                  <mesh
                    name="model_default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.model_default_0.geometry}
                    material={materials['default']}
                  />
                </group>
                <group name="Sphere063" position={[22.176, 73.107, -40.615]} scale={4.309}>
                  <mesh
                    name="Sphere063_Material_#34_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere063_Material_#34_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
                <group name="Sphere064" position={[22.176, 73.107, -40.615]} scale={4.313}>
                  <mesh
                    name="Sphere064_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere064_02_-_Default_0'].geometry}
                    material={getRandomMaterialRef()}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/christmas_tree_2.glb')