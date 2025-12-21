import * as THREE from 'three'
import { BUBBLE_RADIUS } from "./constants"

export const sphereGeometry = new THREE.SphereGeometry(BUBBLE_RADIUS, 32, 32)
export const bubbleMaterials = {
  red: new THREE.MeshStandardMaterial({ color: 'red' }),
  pink: new THREE.MeshStandardMaterial({ color: '#FF00C3' }),
  orange: new THREE.MeshStandardMaterial({ color: 'orange' }),
  purple: new THREE.MeshStandardMaterial({ color: '#8000FF' }),
}