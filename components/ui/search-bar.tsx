'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { searchProducts, categories, type SaaSProduct } from '@/lib/saas-data'

interface SearchBarProps {
  onSearch: (product: SaaSProduct) => void
  onClear: () => void
}

export function SearchBar({ onSearch, onClear }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SaaSProduct[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = searchProducts(query)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (product: SaaSProduct) => {
    setQuery(product.name)
    setIsOpen(false)
    onSearch(product)
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    onClear()
    inputRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder="Search SaaS products or categories..."
          className="h-12 w-full rounded-full border border-border bg-popover/80 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-2xl backdrop-blur-md"
          >
            <div className="max-h-80 overflow-y-auto py-2">
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary"
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ 
                      backgroundColor: product.color === '#000000' ? '#666666' : product.color,
                      boxShadow: `0 0 10px ${product.color === '#000000' ? '#666666' : product.color}40`
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.tagline}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {product.category}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {isOpen && query.length > 0 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-popover/95 p-4 text-center shadow-2xl backdrop-blur-md"
          >
            <p className="text-sm text-muted-foreground">No products found</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category quick filters */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {categories.slice(0, 6).map((category) => (
          <button
            key={category}
            onClick={() => setQuery(category)}
            className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-secondary hover:text-foreground"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
