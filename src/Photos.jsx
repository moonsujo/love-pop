import { Image } from "@react-three/drei";

export default function Photos() {
  // get photos as array from state
  // when new photos are added
  // shoot them from the bubble to the background
  // each should have a center and a random amount of rotation so they look scattered
  // each bubble should have a corresponding photo
  // new bubbles don't have photos. mark them separately
  // 23 photos total
  // 3 x 8 grid
  // on the last spot, display message
  // congrats! you unlocked a letter
  // click to open your letter
  const numPhotoRows = 3
  const numPhotoColumns = 8
  const photoHeight = 23
  const photoWidth = 18
  const photoXSpace = -2
  const positionXLeft = - (photoWidth + photoXSpace) * numPhotoColumns / 2 + photoWidth / 2
  const positionYTop = photoHeight * numPhotoRows / 2 - photoHeight / 2
  const rotationFactor = 0.15
  const photos_row_0 = [
    { url: "images/aquariumKiss.JPG", },
    { url: "images/christmasPhotoOp.JPG", },
    { url: "images/colorfulHeart.JPG", },
    { url: "images/fingerHearts.JPG",  },
    { url: "images/gogiThe.JPG", },
    { url: "images/handHeart.JPG",  },
    { url: "images/hollywoodHalloween.JPG",  },
    { url: "images/lafc.JPG",  },
  ] // replace with state selector when implemented
  const photos_row_1 = [
    { url: "images/lafcHeart.JPG",  },
    { url: "images/lifeFourCutsTyler.JPG",  },
    { url: "images/museumOfIllusions2.JPG",  },
    { url: "images/newJeansPotobox.JPG", },
    { url: "images/pastry.JPG" },
    { url: "images/pixelatedMV.JPG", },
    { url: "images/rgbHeart.JPG", },
    { url: "images/runClub.JPG", },
  ] // replace with state selector when implemented
  const photos_row_2 = [
    { url: "images/sevenMagicMountains.JPG", },
    { url: "images/sojuFrog.JPG", },
    { url: "images/vegasEiffelTower.JPG", },
    { url: "images/vere.JPG", },
    { url: "images/wangoTangoPhoto.JPG",  },
    { url: "images/whaleWatching.JPG",},
    { url: "images/zooKiss.JPG", },
  ] // replace with state selector when implemented

  return <>
    { photos_row_0.map((photo, index) => (
      <Image 
        key={index}
        url={photo.url}
        scale={[photoWidth + Math.random(), photoHeight + Math.random(), 1]}
        position={[positionXLeft + index * (photoWidth + photoXSpace), positionYTop, 0]}
        rotation={[0, 0, (Math.random() - 0.5) * rotationFactor]}
      />
    )) }
    { photos_row_1.map((photo, index) => (
      <Image 
        key={index}
        url={photo.url}
        scale={[photoWidth + Math.random(), photoHeight + Math.random(), 1]}
        position={[positionXLeft + index * (photoWidth + photoXSpace), positionYTop - photoHeight, 0]}
        rotation={[0, 0, (Math.random() - 0.5) * rotationFactor]}
      />
    )) }
    { photos_row_2.map((photo, index) => (
      <Image 
        key={index}
        url={photo.url}
        scale={[photoWidth + Math.random(), photoHeight + Math.random(), 1]}
        position={[positionXLeft + index * (photoWidth + photoXSpace), positionYTop - photoHeight * 2, 0]}
        rotation={[0, 0, (Math.random() - 0.5) * rotationFactor]}
      />
    )) }
  </>
}