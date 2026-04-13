'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'

// NASA's Juno Ganymede Flyby - Radio emissions from Jupiter's moon
const SPACE_AUDIO_URL = 'https://www.nasa.gov/wp-content/uploads/2021/12/juno-ganymede-flyby-audioclip.mp3'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    const audio = new Audio(SPACE_AUDIO_URL)
    audio.loop = true
    audio.volume = volume
    audio.preload = 'auto'
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true)
    })

    audio.addEventListener('error', (e) => {
      console.log('[v0] Audio load error:', e)
    })

    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log('[v0] Audio play error:', error)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div 
        className="flex items-center gap-2 rounded-full border border-border/50 bg-popover/80 p-2 backdrop-blur-md shadow-lg"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Volume slider */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
          aria-label={isPlaying ? 'Pause space music' : 'Play space music'}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>

        {/* Label */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap text-xs text-muted-foreground pr-2"
            >
              Space Sounds
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Animated rings when playing */}
      {isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute h-14 w-14 rounded-full border border-primary/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute h-14 w-14 rounded-full border border-primary/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
          />
        </div>
      )}
    </motion.div>
  )
}
