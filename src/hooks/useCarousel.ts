import { useState, useCallback, useEffect, useRef } from 'react'

interface UseCarouselOptions {
  itemsLength: number
  autoPlay?: boolean
  autoPlayInterval?: number
  loop?: boolean
}

export function useCarousel({
  itemsLength,
  autoPlay = false,
  autoPlayInterval = 3000,
  loop = true
}: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => {
      if (!loop && prev === itemsLength - 1) return prev
      return (prev + 1) % itemsLength
    })
  }, [itemsLength, loop])

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => {
      if (!loop && prev === 0) return prev
      return (prev - 1 + itemsLength) % itemsLength
    })
  }, [itemsLength, loop])

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < itemsLength) {
      setCurrentIndex(index)
    }
  }, [itemsLength])

  const startAutoPlay = useCallback(() => {
    if (autoPlay && !intervalRef.current) {
      intervalRef.current = setInterval(goToNext, autoPlayInterval)
    }
  }, [autoPlay, autoPlayInterval, goToNext])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const reset = useCallback(() => {
    setCurrentIndex(0)
  }, [])

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay()
    }
    return () => stopAutoPlay()
  }, [autoPlay, startAutoPlay, stopAutoPlay])

  // Pause autoplay on manual interaction
  const handleManualNavigation = useCallback((action: () => void) => {
    if (autoPlay) {
      stopAutoPlay()
      action()
      // Restart autoplay after a delay
      setTimeout(startAutoPlay, autoPlayInterval)
    } else {
      action()
    }
  }, [autoPlay, stopAutoPlay, startAutoPlay, autoPlayInterval])

  return {
    currentIndex,
    goToNext: () => handleManualNavigation(goToNext),
    goToPrev: () => handleManualNavigation(goToPrev),
    goToIndex: (index: number) => handleManualNavigation(() => goToIndex(index)),
    reset,
    startAutoPlay,
    stopAutoPlay,
    isFirst: currentIndex === 0,
    isLast: currentIndex === itemsLength - 1,
    canGoNext: loop || currentIndex < itemsLength - 1,
    canGoPrev: loop || currentIndex > 0
  }
} 