import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Level from "./Level";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
import Shooter from "./Shooter";

export default function Experience() {

  // user input
  // algorithm
  // UI

  // goal today: detect user input, shoot bubble across the box
  
  return <>
    <group name='scene-setup'>
      <OrthographicCamera 
        makeDefault
        zoom={10}
        position={[0, 0, 5]}
      />
      {/* <OrbitControls/> */}
      {/* <Perf/> */}
    </group>
    <Level/>
    <Lights/>
    <Shooter/>
  </>
}