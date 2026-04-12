'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { SaaSProduct } from '@/lib/saas-data'

interface PlanetProps {
  product: SaaSProduct
  position: [number, number, number]
  onClick: (product: SaaSProduct) => void
  isHighlighted?: boolean
}

export function Planet({ product, position, onClick, isHighlighted }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const sizeMap = {
    small: 0.4,
    medium: 0.6,
    large: 0.8
  }

  const baseSize = sizeMap[product.size]
  const color = new THREE.Color(product.color === '#000000' ? '#1a1a1a' : product.color)
  const glowColor = new THREE.Color(product.color === '#000000' ? '#666666' : product.color)

  useFrame((state) => {
    if (meshRef.current) {
      // Planet rotation
      meshRef.current.rotation.y += 0.005

      // Floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1
      meshRef.current.position.y = position[1] + floatOffset

      // Scale animation on hover/highlight
      const targetScale = hovered || isHighlighted ? 1.2 : 1
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
    }

    if (glowRef.current) {
      // Pulsing glow
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      const glowScale = (hovered || isHighlighted ? 1.8 : 1.5) * pulse
      glowRef.current.scale.set(glowScale, glowScale, glowScale)
      
      // Copy position from mesh
      if (meshRef.current) {
        glowRef.current.position.y = meshRef.current.position.y
      }
    }

    if (ringRef.current && product.featured) {
      ringRef.current.rotation.z += 0.01
      if (meshRef.current) {
        ringRef.current.position.y = meshRef.current.position.y
      }
    }
  })

  return (
    <group position={[position[0], 0, position[2]]}>
      {/* Glow effect */}
      <mesh ref={glowRef} position={[0, position[1], 0]}>
        <sphereGeometry args={[baseSize, 32, 32]} />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={hovered || isHighlighted ? 0.3 : 0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main planet */}
      <mesh
        ref={meshRef}
        position={[0, position[1], 0]}
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
          emissiveIntensity={hovered || isHighlighted ? 0.5 : 0.2}
          roughness={0.3}
          metalness={0.7}
        />

        {/* Tooltip on hover */}
        {hovered && (
          <Html
            position={[0, baseSize + 0.5, 0]}
            center
            style={{
              pointerEvents: 'none'
            }}
          >
            <div className="whitespace-nowrap rounded-lg bg-popover/95 px-4 py-2 text-center shadow-xl backdrop-blur-sm border border-border">
              <p className="text-sm font-semibold text-foreground">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.tagline}</p>
            </div>
          </Html>
        )}
      </mesh>

      {/* Ring for featured products */}
      {product.featured && (
        <mesh
          ref={ringRef}
          position={[0, position[1], 0]}
          rotation={[Math.PI / 3, 0, 0]}
        >
          <torusGeometry args={[baseSize * 1.4, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={glowColor}
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
    </group>
  )
}
