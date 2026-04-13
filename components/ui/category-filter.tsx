'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
  visibleCount?: number
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  visibleCount = 8
}: CategoryFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const visibleCategories = categories.slice(0, visibleCount)
  const hiddenCategories = categories.slice(visibleCount)
  const hasMoreCategories = hiddenCategories.length > 0

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHiddenCategorySelected = hiddenCategories.includes(selectedCategory || '')

  return (
    <div className="flex items-center gap-2">
      {/* All button */}
      <button
        onClick={() => onSelectCategory(null)}
        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
          selectedCategory === null
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
            : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
        }`}
      >
        All
      </button>

      {/* Visible category buttons */}
      {visibleCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
        >
          {category}
        </button>
      ))}

      {/* More dropdown */}
      {hasMoreCategories && (
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              isHiddenCategorySelected
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {isHiddenCategorySelected ? selectedCategory : 'More'}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full z-50 mt-2 max-h-64 w-48 overflow-y-auto rounded-xl border border-border bg-popover/95 p-2 shadow-xl backdrop-blur-md"
              >
                {hiddenCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onSelectCategory(category)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
