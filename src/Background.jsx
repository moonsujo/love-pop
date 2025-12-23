import { Text3D } from "@react-three/drei";
import { ChristmasTree } from "./meshes/ChristmasTree";
import { Gift0 } from "./meshes/Gift0";
import { Gift1 } from "./meshes/Gift1";
import { Gift2 } from "./meshes/Gift2";
import { Gift3 } from "./meshes/Gift3";
import { Gift4 } from "./meshes/Gift4";

export default function Background() {

  function Title(props) {
    return <Text3D {...props} 
      font={'fonts/christmasFont.json'}
      size={5} 
      height={0.5} 
      curveSegments={15} 
      bevelEnabled 
      bevelThickness={0.03} 
      bevelSize={0.01} 
      bevelOffset={0} 
      bevelSegments={5} 
    >
      Merry0Christmas9Amor!
      <meshStandardMaterial color={'#ffd29f'} />
    </Text3D>
  }
  function Details(props) {
    return <Text3D {...props} 
      font={'fonts/sriracha.json'}
      size={2} 
      height={0.5} 
      curveSegments={15} 
      bevelEnabled 
      bevelThickness={0.03} 
      bevelSize={0.01} 
      bevelOffset={0} 
      bevelSegments={5} 
    >
      {`solve the puzzle to unwrap your gift\nuse arrow keys to move\nspacebar to shoot`}
      <meshStandardMaterial color={'#ffd29f'} />
    </Text3D>
  }
  return (
    <>
      <Title position={[-45, 15, 0]} />
      <Details position={[-45, 9, 0]} />
      <ChristmasTree position={[15, -24, -5]} scale={5} />
      <Gift0 position={[11, -24, 0]} scale={11} />
      <Gift1 position={[15, -24, 0]} scale={11} />
      <Gift2 position={[14, -24, 0]} scale={11} />
      <Gift3 position={[11, -24, 0]} scale={20} />
      <Gift4 position={[-4, -24, 3]} scale={15} />
      {/* <ChristmasBackground position={[0, -20, -50]}scale={30}/> */}
    </>
  )
}