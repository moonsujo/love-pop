import { useDispatch, useSelector } from 'react-redux';
import { BOX_POSITION, BUBBLE_RADIUS, LEVEL_OFFSET_X, LEVEL_OFFSET_Y, NUM_PHOTO_COLUMNS, NUM_PHOTO_ROWS, PHOTO_HEIGHT, PHOTO_POSITION, PHOTO_WIDTH, PHOTO_X_SPACE, photos } from './constants';
import { calculatePositionX, calculatePositionY } from './levels/heart';
import Photo from './Photo';
import { Text, Text3D } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { setLetterOpened } from './store/slices/bubbleSlice';


export default function Photos(props) {

    function calculateGridPosition(index) {

        const positionXLeft = - (PHOTO_WIDTH + PHOTO_X_SPACE) * NUM_PHOTO_COLUMNS / 2 + PHOTO_WIDTH / 2
        const positionYTop = PHOTO_HEIGHT * NUM_PHOTO_ROWS / 2 - PHOTO_HEIGHT / 2

        const row = Math.floor(index / NUM_PHOTO_COLUMNS)
        const col = index % NUM_PHOTO_COLUMNS
        const gridPosition = [
            positionXLeft + col * (PHOTO_WIDTH + PHOTO_X_SPACE) + PHOTO_POSITION[0], 
            positionYTop - row * PHOTO_HEIGHT + PHOTO_POSITION[1], 
            0 + PHOTO_POSITION[2]
        ];

        return gridPosition
    }

    function SurpriseButton(props) {
        const numPoppedPhotos = useSelector((state) => state.bubble.numPoppedPhotos);
        const gameWon = useSelector((state) => state.bubble.gameState) === 'won';
        const level = useSelector((state) => state.bubble.level);
        const dispatch = useDispatch();

        const { scale } = useSpring({
            scale: numPoppedPhotos === photos.length ? [1, 1, 1] : [0,0,0],
        })

        function handlePointerEnter(e) {
            e.stopPropagation()
            document.body.style.cursor = 'pointer';
        }
        function handlePointerLeave(e) {
            e.stopPropagation()
            document.body.style.cursor = 'default';
        }
        function handlePointerDown(e) {
            e.stopPropagation()
            console.log('Surprise button clicked!');
            if (gameWon || level >= 1) {
                dispatch(setLetterOpened(true));
            }
        }

        const buttonWrapper = useRef()
        useFrame((state) => {
            const time = state.clock.getElapsedTime();
            if (gameWon) {
                buttonWrapper.current.rotation.z = Math.sin(time * 2) * 0.05
                // buttonWrapper.current.scale.x = 1 + Math.sin(time * 3) * 0.05
                // buttonWrapper.current.scale.y = 1 + Math.cos(time * 3) * 0.05
            }
        })
        
        return numPoppedPhotos === photos.length && <animated.group {...props} scale={scale} >
            <group ref={buttonWrapper}>
                <mesh 
                    scale={[PHOTO_WIDTH, PHOTO_HEIGHT, 1]} 
                    position={[0, 0, 0]}
                    onPointerDown={e=>handlePointerDown(e)}
                    onPointerEnter={e=>handlePointerEnter(e)}
                    onPointerLeave={e=>handlePointerLeave(e)}
                >
                    <planeGeometry args={[1, 1]} />
                    <meshStandardMaterial color={ numPoppedPhotos === photos.length ? '#c30300' : 'lightblue' } />
                </mesh>
                <Text3D
                    font={'fonts/sriracha.json'}
                    size={1} 
                    height={0.5} 
                    curveSegments={15} 
                    bevelEnabled 
                    bevelThickness={0.03} 
                    bevelSize={0.01} 
                    bevelOffset={0} 
                    bevelSegments={5} 
                    position={[-3, 1, 0]}
                >
                    { level === 0 && !gameWon ? `few more\nleft...` : `Open your\nletter!` }
                    <meshStandardMaterial color={'#2bff00'} />
                </Text3D>
            </group>
        </animated.group>
    }

    const numPenalty = useSelector((state) => state.bubble.numPenalty);

    return <group {...props}>
        { photos.map((photo, index) => (
            <Photo
                initialPosition={[
                    calculatePositionX(photo.col, photo.row % 2 === 0) + LEVEL_OFFSET_X + BOX_POSITION[0],
                    calculatePositionY(photo.row, numPenalty) + LEVEL_OFFSET_Y + BOX_POSITION[1],
                    BUBBLE_RADIUS + 0.1
                ]} 
                finalPosition={calculateGridPosition(index)}
                index={index}
                filePath={photo.url}
                key={index} 
            />
        )) }
        <group name='surprise-button-shift' position={[0, 0, 1]}>
            <SurpriseButton position={calculateGridPosition(NUM_PHOTO_ROWS * NUM_PHOTO_COLUMNS-1)}/>
        </group>
    </group>
}