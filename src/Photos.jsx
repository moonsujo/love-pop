import { LEVEL_OFFSET_X, LEVEL_OFFSET_Y, photos } from './constants';
import { calculatePositionX, calculatePositionY } from './levels/heart';
import Photo from './Photo';

export default function Photos() {
    // map through photos
    // for each photo, create a Photo component
    // each photo has its own springs

    function calculateGridPosition(index) {
        const numPhotoRows = 4
        const numPhotoColumns = 8
        const photoHeight = 17
        const photoWidth = 18
        const photoXSpace = -2
        const positionXLeft = - (photoWidth + photoXSpace) * numPhotoColumns / 2 + photoWidth / 2
        const positionYTop = photoHeight * numPhotoRows / 2 - photoHeight / 2
        const rotationFactor = 0.15

        const row = Math.floor(index / numPhotoColumns)
        const col = index % numPhotoColumns

        const gridPosition = [positionXLeft + col * (photoWidth + photoXSpace), positionYTop - row * photoHeight, 0];
        // gridPosition[`scale`] = [photoWidth + Math.random(), photoHeight + Math.random(), 1];
        // gridPosition[`rotation`] = [0, 0, (Math.random() - 0.5) * rotationFactor];

        return gridPosition
    }

    return <>
        { photos.map((photo, index) => (
            <Photo
                initialPosition={[
                    calculatePositionX(photo.col, photo.row % 2 === 0) + LEVEL_OFFSET_X,
                    calculatePositionY(photo.row) + LEVEL_OFFSET_Y,
                    5
                ]} 
                finalPosition={calculateGridPosition(index)}
                index={index}
                filePath={photo.url}
                key={index} 
            />
        )) }
    </>
}