import { animated, useSpring } from "@react-spring/three";
import { Image } from "@react-three/drei";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { PHOTO_HEIGHT, PHOTO_WIDTH } from "./constants";

export default function Photo({ initialPosition, finalPosition, index, filePath }) {

    const photos = useSelector((state) => state.bubble.photos);

    const [spring, api] = useSpring(() => ({
        from: { 
            position: initialPosition,
            scale: [1, 1, 0],
            // scale: [0, 0, 0],
            rotation: [0, 0, 0]
        },
        config: { mass: 1, tension: 100, friction: 26 },
    }));

    const rotationFactor = 0.1;
    useEffect(() => {
        console.log('photos[index] changed', photos[index]);
        api.start({
            position: photos[index].popped ? finalPosition : initialPosition,
            scale: photos[index].popped ? [PHOTO_WIDTH, PHOTO_HEIGHT, 1] : [1, 1, 0],
            rotation: photos[index].popped ? [
                0, 
                0, 
                (Math.random() - 0.5) * rotationFactor
            ] 
            : [0, 0, 0],
        });
    }, [photos[index]]);

    return <animated.group position={spring.position} scale={spring.scale} rotation={spring.rotation}>
        <Image
            url={filePath} 
        />
    </animated.group>
}