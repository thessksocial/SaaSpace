'use client'

import { useState, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { SearchBar } from '@/components/ui/search-bar'
import { ProductModal } from '@/components/ui/product-modal'
import { saasProducts, type SaaSProduct } from '@/lib/saas-data'

// Dynamic import for SpaceScene to avoid SSR issues with Three.js
const SpaceScene = dynamic(
  () => import('@/components/space/space-scene').then((mod) => mod.SpaceScene),
  { ssr: false }
)

// Generate positions for planets (same logic as in space-scene)
function generatePlanetPositions(products: SaaSProduct[]) {
  const categories = [...new Set(products.map((p) => p.category))]
  const categoryAngles: Record<string, number> = {}

  categories.forEach((cat, i) => {
    categoryAngles[cat] = (i / categories.length) * Math.PI * 2
  })

  const positions: Record<string, [number, number, number]> = {}
  const categoryCount: Record<string, number> = {}

  products.forEach((product) => {
    const categoryAngle = categoryAngles[product.category]
    const count = categoryCount[product.category] || 0
    categoryCount[product.category] = count + 1

    const angleOffset = count * 0.4 - ((categoryCount[product.category] || 1) * 0.2)
    const angle = categoryAngle + angleOffset

    const baseDistance = 8 + count * 2
    const distance =
      baseDistance + (product.size === 'large' ? -1 : product.size === 'small' ? 1 : 0)

    const x = Math.cos(angle) * distance
    const z = Math.sin(angle) * distance
    const y = (Math.random() - 0.5) * 4

    positions[product.id] = [x, y, z]
  })

  return positions
}

export default function SaaSpacePage() {
  const [selectedProduct, setSelectedProduct] = useState<SaaSProduct | null>(null)
  const [highlightedProductId, setHighlightedProductId] = useState<string | null>(null)
  const [targetPosition, setTargetPosition] = useState<[number, number, number] | null>(null)

  const planetPositions = useMemo(() => generatePlanetPositions(saasProducts), [])

  const handleSearch = useCallback(
    (product: SaaSProduct) => {
      setHighlightedProductId(product.id)
      const position = planetPositions[product.id]
      if (position) {
        setTargetPosition(position)
      }
    },
    [planetPositions]
  )

  const handleClearSearch = useCallback(() => {
    setHighlightedProductId(null)
    setTargetPosition(null)
  }, [])

  const handleSelectProduct = useCallback((product: SaaSProduct) => {
    setSelectedProduct(product)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      {/* 3D Space Scene */}
      <SpaceScene
        onSelectProduct={handleSelectProduct}
        highlightedProductId={highlightedProductId}
        targetPosition={targetPosition}
      />

      {/* UI Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center px-6 pt-8"
        >
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SaaSpace
            </span>
          </h1>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Explore the universe of SaaS products
          </p>

          <div className="pointer-events-auto w-full max-w-md">
            <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
          </div>
        </motion.header>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="rounded-full border border-border/50 bg-popover/60 px-4 py-2 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground">
              Drag to rotate • Scroll to zoom • Click planets to explore
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-6 top-8 hidden md:block"
        >
          <div className="rounded-xl border border-border/50 bg-popover/60 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{saasProducts.length}</span> SaaS
              planets
            </p>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </main>
  )
}
