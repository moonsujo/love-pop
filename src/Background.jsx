import { ChristmasBackground } from "./meshes/ChristmasBackground";
import { ChristmasTree } from "./meshes/ChristmasTree";
import { Gift0 } from "./meshes/Gift0";
import { Gift1 } from "./meshes/Gift1";

export default function Background() {
  return (
    <>
      {/* <ChristmasTree position={[15, -24, -5]} scale={5} />
      <Gift0 position={[11, -24, 0]} scale={11} />
      <Gift1 position={[15, -24, 0]} scale={11} /> */}
      <ChristmasBackground position={[0, 0, -50]}scale={30}/>
    </>
  )
}