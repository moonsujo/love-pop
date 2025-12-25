import { Image, Text3D } from "@react-three/drei";
import { ChristmasTree } from "./meshes/ChristmasTree";
import { Gift0 } from "./meshes/Gift0";
import { Gift1 } from "./meshes/Gift1";
import { Gift2 } from "./meshes/Gift2";
import { Gift3 } from "./meshes/Gift3";
import { Gift4 } from "./meshes/Gift4";

export default function BackgroundImage(props) {

  function Title(props) {
    return <Text3D {...props} 
      font={'fonts/christmasFont.json'}
      size={6} 
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
  // function GoodLuck(props) {
  //   return <Text3D {...props} 
  //     font={'fonts/sriracha.json'}
  //     size={1.5} 
  //     height={0.5} 
  //     curveSegments={15} 
  //     bevelEnabled 
  //     bevelThickness={0.03} 
  //     bevelSize={0.01} 
  //     bevelOffset={0} 
  //     bevelSegments={5} 
  //   >
  //     {`buena suerte!`}
  //     <meshStandardMaterial color={'#ffd29f'} />
  //   </Text3D>
  // }
  return (
    <group {...props}>
      <group name='text' position={[-25, 7, -5]}>
        <Title position={[-20, 5, 0]} />
        <Details position={[-20, -4, 0]} />
        {/* <GoodLuck position={[17, -28, 0]} /> */}
        <mesh name='text-background' scale={[200, 100, 1]} position={[0, 0, 0]}>
          <circleGeometry args={[1, 128]} />
          <meshStandardMaterial color={'#000000'} transparent opacity={0.8} />
        </mesh>
      </group>
      <group name='gifts-and-tree' position={[20, -22, -5]}>
        <ChristmasTree position={[4, 0, 0]} scale={5} />
        <Gift0 position={[0, 0, 3]} scale={11} />
        <Gift1 position={[1, 0, 3]} scale={11} />
        <Gift2 position={[0, 0, 3]} scale={11} />
        <Gift3 position={[2, 0, 5]} scale={20} />
        <Gift4 position={[-15, 0, 3]} scale={15} />
      </group>
      <Image url='images/christmasBackdrop2.png' scale={[160, 80, 1]} position={[0, 0, -6]} />
      {/* <Image url='images/christmasFrame2.png' scale={[150, 80, 1]} position={[0, 0, 2]} /> */}
    </group>
  )
}