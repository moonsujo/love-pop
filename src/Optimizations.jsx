import * as THREE from 'three'
import { BUBBLE_RADIUS } from "./constants"

export const sphereGeometry = new THREE.SphereGeometry(BUBBLE_RADIUS, 32, 32)
export const bubbleMaterials = {
  red: new THREE.MeshStandardMaterial({ color: 'red' }),
  pink: new THREE.MeshStandardMaterial({ color: '#FF00C3' }),
  orange: new THREE.MeshStandardMaterial({ color: '#FF8C00' }),
  purple: new THREE.MeshStandardMaterial({ color: '#8000FF' }),
  green: new THREE.MeshStandardMaterial({ color: '#71ff25' }),
  yellow: new THREE.MeshStandardMaterial({ color: '#5d5d5d' }),
  black: new THREE.MeshStandardMaterial({ color: '#000000' }),
  invisible: new THREE.MeshStandardMaterial({ color: '#FFFFFF', transparent: true, opacity: 0 }),
}