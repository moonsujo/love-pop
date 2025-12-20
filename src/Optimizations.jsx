import * as THREE from 'three'
import { BUBBLE_RADIUS } from "./constants"

export const sphereGeometry = new THREE.SphereGeometry(BUBBLE_RADIUS, 32, 32)
export const bubbleMaterials = {
  red: new THREE.MeshStandardMaterial({ color: 'red' }),
  green: new THREE.MeshStandardMaterial({ color: 'green' }),
  yellow: new THREE.MeshStandardMaterial({ color: 'yellow' }),
  blue: new THREE.MeshStandardMaterial({ color: 'blue' }),
}