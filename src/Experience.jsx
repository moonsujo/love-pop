import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Level from "./Level";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
import Shooter from "./Shooter";
import Photos from "./Photos";
import Background from "./Background";
import { BOX_POSITION } from "./constants";
import Letter from "./Letter";
import BackgroundImage from "./BackgroundImage";
import Snow from "./Snow";
import CustomCamera from "./CustomCamera";

export default function Experience() {

  return <>
    <group name='scene-setup'>
      <CustomCamera/>
      {/* <OrbitControls/> */}
      {/* <Perf/>  */}
      <Lights/>
    </group>
    <group name='scene' scale={1.3}>
      <Level position={BOX_POSITION}/>
      <Shooter position={BOX_POSITION}/>
      <Photos position={[0, 0, -1]} scale={1}/>
    </group>
    <Letter/>
    <BackgroundImage position={[0, 0, -5]}/>
    <Snow/>
    {/* <BackgroundImage position={[-10, 0, -10]}/> */}
  </>
}