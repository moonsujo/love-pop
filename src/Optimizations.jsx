import * as THREE from 'three'
import { BUBBLE_RADIUS } from "./constants"

export const sphereGeometry = new THREE.SphereGeometry(BUBBLE_RADIUS, 32, 32)
export const bubbleMaterial = new THREE.MeshStandardMaterial({ color: 'orange' })