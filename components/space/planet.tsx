'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { SaaSProduct } from '@/lib/saas-data'

interface PlanetProps {
  product: SaaSProduct
  orbitRadius: number
  orbitSpeed: number
  initialAngle: number
  verticalOffset: number
  onClick: (product: SaaSProduct) => void
  isHighlighted?: boolean
  isFiltered?: boolean
}

export function Planet({
  product,
  orbitRadius,
  orbitSpeed,
  initialAngle,
  verticalOffset,
  onClick,
  isHighlighted,
  isFiltered = true
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const angleRef = useRef(initialAngle)

  const sizeMap = {
    small: 0.5,
    medium: 0.8,
    large: 1.1
  }

  const baseSize = sizeMap[product.size]
  const color = new THREE.Color(product.color === '#000000' ? '#1a1a1a' : product.color)
  const glowColor = new THREE.Color(product.color === '#000000' ? '#666666' : product.color)

  useFrame((state, delta) => {
    if (!isFiltered) return

    // Update orbit angle
    angleRef.current += orbitSpeed * delta

    if (groupRef.current) {
      // Calculate position on orbit
      const x = Math.cos(angleRef.current) * orbitRadius
      const z = Math.sin(angleRef.current) * orbitRadius
      
      // Add floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * 0.5 + initialAngle) * 0.3
      const y = verticalOffset + floatOffset

      groupRef.current.position.set(x, y, z)
    }

    if (meshRef.current) {
      // Planet self-rotation
      meshRef.current.rotation.y += 0.008

      // Scale animation on hover/highlight
      const targetScale = hovered || isHighlighted ? 1.3 : 1
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
    }

    if (glowRef.current) {
      // Pulsing glow
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + initialAngle) * 0.15
      const glowScale = (hovered || isHighlighted ? 2 : 1.6) * pulse
      glowRef.current.scale.setScalar(glowScale)
    }

    if (ringRef.current && product.featured) {
      ringRef.current.rotation.z += 0.015
    }
  })

  if (!isFiltered) return null

  return (
    <group ref={groupRef}>
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[baseSize, 32, 32]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={hovered || isHighlighted ? 0.35 : 0.18}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main planet */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'default'
        }}
        onClick={(e) => {
          e.stopPropagation()
          onClick(product)
        }}
      >
        <sphereGeometry args={[baseSize, 64, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered || isHighlighted ? 0.6 : 0.25}
          roughness={0.25}
          metalness={0.75}
        />

        {/* Tooltip on hover */}
        {hovered && (
          <Html
            position={[0, baseSize + 0.8, 0]}
            center
            style={{
              pointerEvents: 'none'
            }}
          >
            <div className="whitespace-nowrap rounded-xl bg-popover/95 px-5 py-3 text-center shadow-2xl backdrop-blur-md border border-border">
              <p className="text-sm font-bold text-foreground">{product.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{product.tagline}</p>
              <p className="text-[10px] text-accent mt-1.5 uppercase tracking-wider">{product.category}</p>
            </div>
          </Html>
        )}
      </mesh>

      {/* Ring for featured products */}
      {product.featured && (
        <mesh
          ref={ringRef}
          rotation={[Math.PI / 2.5, 0, 0]}
        >
          <torusGeometry args={[baseSize * 1.5, 0.03, 16, 100]} />
          <meshBasicMaterial
            color={glowColor}
            transparent
            opacity={0.7}
          />
        </mesh>
      )}
    </group>
  )
}
