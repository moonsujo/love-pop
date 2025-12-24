import { useEffect } from 'react';
import { OrthographicCamera } from '@react-three/drei';
import { useState } from 'react';

export default function CustomCamera() {
    function calcZoom() {
        const zoomMin = 15;
        const newZoom = zoomMin * window.innerWidth / 1920
        return newZoom
    }

    function handleResize() {
        setZoom(calcZoom())
    }

    const [zoom, setZoom] = useState(calcZoom());

    // Assign camera to renderer in different components
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        return () => {
            window.removeEventListener("resize", handleResize, false);
        }
    }, []);

    return <OrthographicCamera
      makeDefault
      zoom={zoom}
      position={[0, 0, 20]}
    />
}