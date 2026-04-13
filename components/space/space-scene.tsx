'use client'

import { useMemo, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Starfield, SpaceDust } from './starfield'
import { Planet } from './planet'
import { Sun } from './sun'
import { CameraController } from './camera-controller'
import { saasProducts, type SaaSProduct } from '@/lib/saas-data'

interface SpaceSceneProps {
  onSelectProduct: (product: SaaSProduct) => void
  highlightedProductId?: string | null
  targetPosition?: [number, number, number] | null
}

// Generate orbit parameters for each planet
function generateOrbitParameters(products: SaaSProduct[]) {
  const categories = [...new Set(products.map(p => p.category))]
  const categoryIndex: Record<string, number> = {}
  const categoryCount: Record<string, number> = {}
  
  categories.forEach((cat, i) => {
    categoryIndex[cat] = i
    categoryCount[cat] = 0
  })

  const parameters: Record<string, {
    orbitRadius: number
    orbitSpeed: number
    initialAngle: number
    verticalOffset: number
  }> = {}

  products.forEach((product) => {
    const catIdx = categoryIndex[product.category]
    const countInCategory = categoryCount[product.category]
    categoryCount[product.category] = countInCategory + 1

    // Base orbit radius - Start beyond the sun (sun radius is 50)
    // Start from 80 units and add 30 units spacing for each category tier
    const categoryRadius = 80 + catIdx * 30
    
    // Within category, spread products along the orbit with significant radii variation
    const radiusVariation = (countInCategory % 5 - 2) * 10
    const orbitRadius = categoryRadius + radiusVariation

    // Different speeds for more dynamic feel - outer orbits move slower
    const baseSpeed = 0.04 / (1 + catIdx * 0.12)
    const speedVariation = (Math.random() - 0.5) * 0.01
    const orbitSpeed = baseSpeed + speedVariation

    // Distribute initial angles - full 360 degrees with unique spacing per product
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)) // Golden angle for even distribution
    const globalIndex = Object.keys(parameters).length
    const initialAngle = globalIndex * goldenAngle + catIdx * 0.5

    // Vertical distribution - more spread out
    const verticalOffset = (Math.random() - 0.5) * 15

    parameters[product.id] = {
      orbitRadius,
      orbitSpeed,
      initialAngle,
      verticalOffset
    }
  })

  return parameters
}

// Calculate current position for camera targeting
export function getPlanetPosition(productId: string, time: number = 0): [number, number, number] | null {
  const parameters = generateOrbitParameters(saasProducts)
  const params = parameters[productId]
  if (!params) return null

  const angle = params.initialAngle + params.orbitSpeed * time
  const x = Math.cos(angle) * params.orbitRadius
  const z = Math.sin(angle) * params.orbitRadius
  const y = params.verticalOffset

  return [x, y, z]
}

export function SpaceScene({ 
  onSelectProduct, 
  highlightedProductId, 
  targetPosition
}: SpaceSceneProps) {
  const orbitParameters = useMemo(() => generateOrbitParameters(saasProducts), [])

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 100, 280], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#020205' }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting - reduced since sun provides main light */}
          <ambientLight intensity={0.15} />

          {/* Background elements */}
          <Starfield count={12000} radius={600} />
          <SpaceDust count={800} />

          {/* Central Sun */}
          <Sun />

          {/* Orbiting Planets */}
          {saasProducts.map((product) => {
            const params = orbitParameters[product.id]
            
            return (
              <Planet
                key={product.id}
                product={product}
                orbitRadius={params.orbitRadius}
                orbitSpeed={params.orbitSpeed}
                initialAngle={params.initialAngle}
                verticalOffset={params.verticalOffset}
                onClick={onSelectProduct}
                isHighlighted={highlightedProductId === product.id}
              />
            )
          })}

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
