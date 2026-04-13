'use client'

import { useState, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { SearchBar } from '@/components/ui/search-bar'
import { ProductModal } from '@/components/ui/product-modal'
import { CategoryFilter } from '@/components/ui/category-filter'
import { saasProducts, type SaaSProduct } from '@/lib/saas-data'

// Dynamic import for SpaceScene to avoid SSR issues with Three.js
const SpaceScene = dynamic(
  () => import('@/components/space/space-scene').then((mod) => mod.SpaceScene),
  { ssr: false }
)

export default function SaaSpacePage() {
  const [selectedProduct, setSelectedProduct] = useState<SaaSProduct | null>(null)
  const [highlightedProductId, setHighlightedProductId] = useState<string | null>(null)
  const [targetPosition, setTargetPosition] = useState<[number, number, number] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(saasProducts.map(p => p.category))]
    return cats.sort()
  }, [])

  // Count filtered products
  const filteredCount = useMemo(() => {
    if (!selectedCategory) return saasProducts.length
    return saasProducts.filter(p => p.category === selectedCategory).length
  }, [selectedCategory])

  const handleSearch = useCallback(
    (product: SaaSProduct) => {
      setHighlightedProductId(product.id)
      // Note: Position will be calculated dynamically based on current orbit
    },
    []
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

  const handleSelectCategory = useCallback((category: string | null) => {
    setSelectedCategory(category)
    setHighlightedProductId(null)
    setTargetPosition(null)
  }, [])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      {/* 3D Space Scene */}
      <SpaceScene
        onSelectProduct={handleSelectProduct}
        highlightedProductId={highlightedProductId}
        targetPosition={targetPosition}
        selectedCategory={selectedCategory}
      />

      {/* UI Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center px-6 pt-6"
        >
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              SaaSpace
            </span>
          </h1>
          <p className="mb-4 text-sm text-muted-foreground">
            Explore the universe of SaaS products
          </p>

          <div className="pointer-events-auto w-full max-w-md mb-4">
            <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pointer-events-auto overflow-x-auto max-w-full pb-2 scrollbar-hide"
          >
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              visibleCount={7}
            />
          </motion.div>
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
          className="absolute right-6 top-6 hidden md:block"
        >
          <div className="rounded-xl border border-border/50 bg-popover/60 px-4 py-3 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredCount}</span>
              {selectedCategory ? ` ${selectedCategory}` : ''} SaaS planets
            </p>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </main>
  )
}
