'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

interface CameraControllerProps {
  targetPosition?: [number, number, number] | null
  autoRotate?: boolean
}

export function CameraController({ targetPosition, autoRotate = true }: CameraControllerProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const { camera } = useThree()
  const isAnimating = useRef(false)
  const animationProgress = useRef(0)
  const startPosition = useRef(new THREE.Vector3())
  const endPosition = useRef(new THREE.Vector3())

  useEffect(() => {
    if (targetPosition && controlsRef.current) {
      // Calculate camera position to look at target
      const target = new THREE.Vector3(...targetPosition)
      const direction = target.clone().normalize()
      const distance = 8 // Distance from target

      startPosition.current.copy(camera.position)
      endPosition.current.copy(target.clone().add(direction.multiplyScalar(distance)))

      isAnimating.current = true
      animationProgress.current = 0

      // Update orbit controls target
      controlsRef.current.target.copy(target)
    }
  }, [targetPosition, camera])

  useFrame(() => {
    if (isAnimating.current && controlsRef.current) {
      animationProgress.current += 0.02

      if (animationProgress.current >= 1) {
        animationProgress.current = 1
        isAnimating.current = false
      }

      // Smooth easing
      const t = 1 - Math.pow(1 - animationProgress.current, 3)

      camera.position.lerpVectors(startPosition.current, endPosition.current, t)
      controlsRef.current.update()
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={true}
      minDistance={5}
      maxDistance={800}
      autoRotate={autoRotate && !isAnimating.current}
      autoRotateSpeed={0.3}
      rotateSpeed={0.5}
      zoomSpeed={1.5}
      enableDamping
      dampingFactor={0.05}
    />
  )
}
