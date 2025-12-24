import { animated, useSpring } from "@react-spring/three";
import { Image, MeshDistortMaterial } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function Letter() {

    const letterOpened = useSelector((state) => state.bubble.letterOpened);

    const { backgroundOpacity, scale } = useSpring({
        backgroundOpacity: letterOpened ? 0.3 : 0,
        scale: letterOpened ? [1, 1, 1] : [0, 0, 0],
    });

    const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)

    return <group>
        <mesh name='background' scale={[150, 100, 1]} position={[0, 0, 5]}>
            <planeGeometry args={[1, 1]} />
            <AnimatedMeshDistortMaterial color={'#000000'} transparent opacity={backgroundOpacity} />
        </mesh>
        <animated.group scale={scale} position={[0, 0, 6]}>
            <Image url='images/christmasLetter.png' scale={[42, 56, 1]}/>
        </animated.group>
    </group>
}