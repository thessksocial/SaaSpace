'use client'

import { ExternalLink, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SaaSProduct } from '@/lib/saas-data'

interface ProductModalProps {
  product: SaaSProduct | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 z-50 w-full max-w-md -translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
          >
            <div className="mx-4 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-md">
              {/* Header with color accent */}
              <div
                className="relative h-2"
                style={{
                  background: `linear-gradient(90deg, ${product.color === '#000000' ? '#333333' : product.color}, ${product.color === '#000000' ? '#666666' : product.color}88)`
                }}
              />

              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-6 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Planet indicator */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{
                      backgroundColor: product.color === '#000000' ? '#333333' : product.color,
                      boxShadow: `0 0 30px ${product.color === '#000000' ? '#333333' : product.color}60`
                    }}
                  />
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="mb-3 text-lg font-medium text-foreground/90">{product.tagline}</p>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* CTA Button */}
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: product.color === '#000000' ? '#333333' : product.color,
                    color: ['#FFFFFF', '#FFE01B', '#FCBF49', '#FFD02F', '#6AFDEF'].includes(product.color)
                      ? '#000000'
                      : '#FFFFFF'
                  }}
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
