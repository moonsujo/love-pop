import { animated, useSpring } from "@react-spring/three";
import { Image } from "@react-three/drei";
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Photo({ initialPosition, finalPosition, index, filePath }) {

    const numPoppedPhotos = useSelector((state) => state.bubble.numPoppedPhotos);
    const poppedPhotos = useSelector((state) => state.bubble.poppedPhotos);
    const photos = useSelector((state) => state.bubble.photos);

    const [spring, api] = useSpring(() => ({
        from: { position: initialPosition },
        config: { mass: 1, tension: 170, friction: 26 },
    }));

    useEffect(() => {
        console.log('photos[index] changed', photos[index]);
        api.start({
            position: photos[index].popped ? finalPosition : initialPosition
        });
    }, [photos[index]]);



    return <animated.group position={spring.position}>
        <Image
            url={filePath} 
            scale={1} 
        />
    </animated.group>
}