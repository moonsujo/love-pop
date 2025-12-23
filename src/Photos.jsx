import { Image } from "@react-three/drei";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/three";

export default function Photos() {
  // photo elements
  // lay them all out with springs
  // initially, put them on the bubble location
    // offset by box location
  // then animate to final position in grid

  // bubbles popped state
  // on state change (use effect)
  // for each bubble
  // if there is a photo
  // animate to grid position

  const poppedBubbles = useSelector((state) => state.bubble.poppedBubbles);
  const bubbles = useSelector((state) => state.bubble.bubbles);

  const fromInitial = {}
  for (const bubble of bubbles) {
    if (bubble && bubble.hasPhoto) {
      fromInitial[`${bubble.index}`] = {}
      fromInitial[`${bubble.index}`].position = bubble.position;
      fromInitial[`${bubble.index}`].scale = [5, 5, 1];
      fromInitial[`${bubble.index}`].rotation = [0, 0, 0];
    }
  }

  const [springs, api] = useSpring(() => ({
    from: fromInitial
  }))

  function getGridPosition(index) {
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

    return {
      position: [positionXLeft + col * (photoWidth + photoXSpace), positionYTop - row * photoHeight, 0],
      scale: [photoWidth + Math.random(), photoHeight + Math.random(), 1],
      rotation: [0, 0, (Math.random() - 0.5) * rotationFactor],
    }
  }

  useEffect(() => {
    // subscribe to bubble popped state
    // on change, trigger animation
    console.log('popped bubbles in Photos', poppedBubbles);
    const from = {}
    const to = []
    for (const bubble of poppedBubbles) {
      from[`${bubble.index}`] = {}
      from[`${bubble.index}`].position = bubble.position;
      from[`${bubble.index}`].scale = [5, 5, 1];
      from[`${bubble.index}`].rotation = [0, 0, 0];
      to.push({ ...getGridPosition(bubble.index), key: `${bubble.index}` });
    }

    api.start({
      from,
      to
    })
  }, [poppedBubbles])

  const photos_row_0 = [
    { url: "images/aquariumKiss.JPG", },
    { url: "images/christmasPhotoOp.JPG", },
    { url: "images/colorfulHeart.JPG", },
    { url: "images/fingerHearts.JPG",  },
    { url: "images/flight.JPG", },
    { url: "images/flowerGarden.JPG",  },
    { url: "images/gogiThe.JPG",  },
    { url: "images/gogiWrap.JPG",  },
  ] // replace with state selector when implemented
  const photos_row_1 = [
    { url: "images/handHeart.JPG",  },
    { url: "images/hollywoodHalloween.JPG",  },
    { url: "images/iHeartRadio.JPG",  },
    { url: "images/laCity.JPG", },
    { url: "images/lafc.JPG" },
    { url: "images/museumOfIllusions2.JPG", },
    { url: "images/newJeansPotobox.JPG", },
    { url: "images/pastry.JPG", },
  ] // replace with state selector when implemented
  const photos_row_2 = [
    { url: "images/photoStudio.JPG", },
    { url: "images/eyebrow.JPG", },
    { url: "images/reflection.JPG", },
    { url: "images/rgbHeart.JPG", },
    { url: "images/runClub.JPG",  },
    { url: "images/sevenMagicMountains.JPG",},
    { url: "images/shrek.JPG", },
    { url: "images/disneyland.JPG", },
  ] // replace with state selector when implemented
  const photos_row_3 = [
    { url: "images/sojuFrog.JPG", },
    { url: "images/tudum.JPG", },
    { url: "images/vegasEiffelTower.JPG", },
    { url: "images/wangoTangoPhoto.JPG", },
    { url: "images/whaleWatching.JPG",  },
    { url: "images/zooKiss.JPG",},
    { url: "images/pixelatedMV.JPG", },
  ] // replace with state selector when implemented

  return <>
    {springs && Object.keys(springs).map((key) => {
      const photoIndex = parseInt(key);
      let photoData = null;
      // find photo data from rows
      if (photoIndex < 8) {
        photoData = photos_row_0[photoIndex];
      }
      else if (photoIndex < 16) {
        photoData = photos_row_1[photoIndex - 8];
      }
      else if (photoIndex < 24) {
        photoData = photos_row_2[photoIndex - 16];
      }
      else {
        photoData = photos_row_3[photoIndex - 24];
      }
      
      if (!photoData) return null;
      return <animated.group key={key} position={springs[key].position} scale={springs[key].scale} rotation={springs[key].rotation}>
        <Image 
          url={photoData.url} 
          scale={1} 
          position={[0, 0, 0]} 
        />
      </animated.group>
    })}
  </>


}