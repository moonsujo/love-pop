import { animated, useSpring } from "@react-spring/three";
import { Image, MeshDistortMaterial } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { setLetterOpened, setLevelState } from "./store/slices/bubbleSlice";
import { levelRegularInfo } from "./levels/levelRegular";
import { levelVaniInfo } from "./levels/levelVani";

export default function Letter() {

    // const letterOpened = true
    const dispatch = useDispatch();
    const letterOpened = useSelector((state) => state.bubble.letterOpened);
    const level = useSelector((state) => state.bubble.level);

    const { backgroundOpacity, scale } = useSpring({
        backgroundOpacity: letterOpened ? 0.3 : 0,
        scale: letterOpened ? [1, 1, 1] : [0, 0, 0],
    });

    function handlePointerDown(e) {
        e.stopPropagation()
        if (letterOpened) { 
            dispatch(setLetterOpened(false)); 
            if (level === 0) {
                dispatch(setLevelState({ ...levelVaniInfo }));
            }
            return; 
        };
    }

    const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)

    return <group>
        <mesh name='background' scale={[150, 100, 1]} position={[0, 0, 5]}>
            <planeGeometry args={[1, 1]} />
            <AnimatedMeshDistortMaterial color={'#000000'} transparent opacity={backgroundOpacity} />
        </mesh>
        <animated.group scale={scale} position={[0, 0, 6]}>
            <Image url='images/christmasLetter.png' scale={[42, 56, 1]} onPointerDown={e=>handlePointerDown(e)}/>
        </animated.group>
    </group>
}