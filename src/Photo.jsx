import { animated, useSpring } from "@react-spring/three";
import { Image } from "@react-three/drei";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { BUBBLE_RADIUS, PHOTO_HEIGHT, PHOTO_WIDTH, Y_GAP } from "./constants";

export default function Photo({ initialPosition, finalPosition, index, filePath }) {

    const photos = useSelector((state) => state.bubble.photos);
    const numPenalty = useSelector((state) => state.bubble.numPenalty);

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
        api.start({
            position: photos[index].popped ? finalPosition : [initialPosition[0], initialPosition[1] - numPenalty * Y_GAP, initialPosition[2]],
            scale: photos[index].popped ? [PHOTO_WIDTH, PHOTO_HEIGHT, 1] : [1, 1, 0],
            rotation: photos[index].popped ? [
                0, 
                0, 
                (Math.random() - 0.5) * rotationFactor
            ] 
            : [0, 0, 0],
        });
    }, [photos[index]]);

    useEffect(() => {
        if (photos[index].popped) return;

        const previousNumPenalty = numPenalty === 0 ? 0 : numPenalty - 1;
        api.start({
            from: {
                position: [initialPosition[0], initialPosition[1] - previousNumPenalty * Y_GAP, initialPosition[2]]
            },
            to: {
                position: [initialPosition[0], initialPosition[1] - numPenalty * Y_GAP, initialPosition[2]]
            },
            immediate: true // skip animation to follow the bubbles
        });
    }, [numPenalty]);

    return <animated.group position={spring.position} scale={spring.scale} rotation={spring.rotation}>
        <Image
            url={filePath} 
        />
    </animated.group>
}