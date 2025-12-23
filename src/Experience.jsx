import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Level from "./Level";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
import Shooter from "./Shooter";
import Photos from "./Photos";
import Background from "./Background";

export default function Experience() {

  return <>
    <group name='scene-setup'>
      <OrthographicCamera 
        makeDefault
        zoom={20}
        position={[0, 0, 5]}
      />
      <OrbitControls/>
      {/* <Perf/>  */}
      <Lights/>
    </group>
    <group name='scene' scale={1.3} position={[38, 0, 0]}>
      <Level/>
      <Shooter/>
    </group>
    <Background/>
    <Photos/>
  </>
}