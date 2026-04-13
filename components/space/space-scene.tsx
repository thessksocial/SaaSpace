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
  selectedCategory?: string | null
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

    // Base orbit radius - spread out more by category
    // Start from 12 units and add spacing for each category
    const categoryRadius = 14 + catIdx * 6
    
    // Within category, spread products along the orbit with different radii
    const radiusVariation = (countInCategory % 3 - 1) * 2.5
    const orbitRadius = categoryRadius + radiusVariation

    // Different speeds for more dynamic feel - outer orbits move slower
    const baseSpeed = 0.08 / (1 + catIdx * 0.15)
    const speedVariation = (Math.random() - 0.5) * 0.02
    const orbitSpeed = baseSpeed + speedVariation

    // Distribute initial angles within the category sector
    const sectorAngle = (Math.PI * 2) / categories.length
    const categoryStartAngle = catIdx * sectorAngle
    const angleInSector = (countInCategory / 15) * sectorAngle * 0.8
    const initialAngle = categoryStartAngle + angleInSector + Math.random() * 0.3

    // Vertical distribution
    const verticalOffset = (Math.random() - 0.5) * 6

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
  targetPosition,
  selectedCategory 
}: SpaceSceneProps) {
  const orbitParameters = useMemo(() => generateOrbitParameters(saasProducts), [])

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return saasProducts
    return saasProducts.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 15, 50], fov: 55 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#020205' }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting - reduced since sun provides main light */}
          <ambientLight intensity={0.15} />

          {/* Background elements */}
          <Starfield count={8000} radius={150} />
          <SpaceDust count={400} />

          {/* Central Sun */}
          <Sun />

          {/* Orbiting Planets */}
          {saasProducts.map((product) => {
            const params = orbitParameters[product.id]
            const isFiltered = !selectedCategory || product.category === selectedCategory
            
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
                isFiltered={isFiltered}
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
