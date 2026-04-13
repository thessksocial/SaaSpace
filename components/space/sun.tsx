'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Sun() {
  const sunRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const coronaRef = useRef<THREE.Mesh>(null)
  const outerGlowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002
    }

    if (glowRef.current) {
      const pulse = 1 + Math.sin(time * 1.5) * 0.05
      glowRef.current.scale.setScalar(pulse)
    }

    if (coronaRef.current) {
      coronaRef.current.rotation.z += 0.001
      const coronaPulse = 1 + Math.sin(time * 0.8) * 0.08
      coronaRef.current.scale.setScalar(coronaPulse)
    }

    if (outerGlowRef.current) {
      const outerPulse = 1 + Math.sin(time * 0.5) * 0.1
      outerGlowRef.current.scale.setScalar(outerPulse)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Outer glow - very large and soft */}
      <mesh ref={outerGlowRef}>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial
          color="#FF6B00"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Corona effect */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial
          color="#FF8C00"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial
          color="#FFAA00"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main sun sphere */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>

      {/* Sun surface glow */}
      <mesh>
        <sphereGeometry args={[2.52, 64, 64]} />
        <meshBasicMaterial
          color="#FFA500"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Point light from sun */}
      <pointLight
        position={[0, 0, 0]}
        intensity={3}
        color="#FFD700"
        distance={100}
        decay={2}
      />

      {/* Secondary warm light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={1.5}
        color="#FF8C00"
        distance={60}
        decay={2}
      />
    </group>
  )
}
