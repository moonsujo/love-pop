import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Level from "./Level";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
import Shooter from "./Shooter";
import Photos from "./Photos";

export default function Experience() {

  // user input
  // algorithm
  // UI

  return <>
    <group name='scene-setup'>
      <OrthographicCamera 
        makeDefault
        zoom={10}
        position={[0, 0, 5]}
      />
      {/* <OrbitControls/> */}
      <Perf/> 
      <Lights/>
    </group>
    <group name='scene' scale={1}>
      <Level/>
      <Shooter/>
    </group>
    {/* <Photos/> */}
  </>
}