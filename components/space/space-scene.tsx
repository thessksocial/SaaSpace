'use client'

import { useMemo, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Starfield, SpaceDust } from './starfield'
import { Planet } from './planet'
import { CameraController } from './camera-controller'
import { saasProducts, type SaaSProduct } from '@/lib/saas-data'

interface SpaceSceneProps {
  onSelectProduct: (product: SaaSProduct) => void
  highlightedProductId?: string | null
  targetPosition?: [number, number, number] | null
}

// Generate positions for planets in clusters by category
function generatePlanetPositions(products: SaaSProduct[]) {
  const categories = [...new Set(products.map(p => p.category))]
  const categoryAngles: Record<string, number> = {}
  
  // Assign angle sectors to categories
  categories.forEach((cat, i) => {
    categoryAngles[cat] = (i / categories.length) * Math.PI * 2
  })

  const positions: Record<string, [number, number, number]> = {}
  const categoryCount: Record<string, number> = {}

  products.forEach((product) => {
    const categoryAngle = categoryAngles[product.category]
    const count = categoryCount[product.category] || 0
    categoryCount[product.category] = count + 1

    // Cluster products around their category angle
    const angleOffset = (count * 0.4) - ((categoryCount[product.category] || 1) * 0.2)
    const angle = categoryAngle + angleOffset
    
    // Vary distance based on size and index
    const baseDistance = 8 + count * 2
    const distance = baseDistance + (product.size === 'large' ? -1 : product.size === 'small' ? 1 : 0)
    
    const x = Math.cos(angle) * distance
    const z = Math.sin(angle) * distance
    const y = (Math.random() - 0.5) * 4 // Vertical variation

    positions[product.id] = [x, y, z]
  })

  return positions
}

export function SpaceScene({ onSelectProduct, highlightedProductId, targetPosition }: SpaceSceneProps) {
  const planetPositions = useMemo(() => generatePlanetPositions(saasProducts), [])

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 5, 20], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#030308' }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4488ff" />

          {/* Background elements */}
          <Starfield count={6000} radius={80} />
          <SpaceDust count={300} />

          {/* Planets */}
          {saasProducts.map((product) => (
            <Planet
              key={product.id}
              product={product}
              position={planetPositions[product.id]}
              onClick={onSelectProduct}
              isHighlighted={highlightedProductId === product.id}
            />
          ))}

          {/* Camera controls */}
          <CameraController
            targetPosition={targetPosition}
            autoRotate={!highlightedProductId}
          />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Helper to get planet position by product ID
export function getPlanetPosition(productId: string): [number, number, number] | null {
  const positions = generatePlanetPositions(saasProducts)
  return positions[productId] || null
}
