import { BOX_POSITION, LEVEL_OFFSET_X, LEVEL_OFFSET_Y, PHOTO_HEIGHT, PHOTO_POSITION, PHOTO_WIDTH, PHOTO_X_SPACE, photos } from './constants';
import { calculatePositionX, calculatePositionY } from './levels/heart';
import Photo from './Photo';


export default function Photos(props) {

    function calculateGridPosition(index) {
        const numPhotoRows = 4
        const numPhotoColumns = 8

        const positionXLeft = - (PHOTO_WIDTH + PHOTO_X_SPACE) * numPhotoColumns / 2 + PHOTO_WIDTH / 2
        const positionYTop = PHOTO_HEIGHT * numPhotoRows / 2 - PHOTO_HEIGHT / 2

        const row = Math.floor(index / numPhotoColumns)
        const col = index % numPhotoColumns

        const gridPosition = [
            positionXLeft + col * (PHOTO_WIDTH + PHOTO_X_SPACE) + PHOTO_POSITION[0], 
            positionYTop - row * PHOTO_HEIGHT + PHOTO_POSITION[1], 
            0 + PHOTO_POSITION[2]
        ];

        return gridPosition
    }

    return <group {...props}>
        { photos.map((photo, index) => (
            <Photo
                initialPosition={[
                    calculatePositionX(photo.col, photo.row % 2 === 0) + LEVEL_OFFSET_X + BOX_POSITION[0],
                    calculatePositionY(photo.row) + LEVEL_OFFSET_Y + BOX_POSITION[1],
                    5
                ]} 
                finalPosition={calculateGridPosition(index)}
                index={index}
                filePath={photo.url}
                key={index} 
            />
        )) }
    </group>
}