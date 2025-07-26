import { useState, useEffect, useRef, RefObject } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<Element>, IntersectionObserverEntry | undefined] {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
    ...restOptions
  } = options

  const elementRef = useRef<Element>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin, ...restOptions }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen, restOptions])

  return [elementRef, entry]
}

// Simplified hook that returns just the visibility state
export function useInView(
  options: UseIntersectionObserverOptions = {}
): [RefObject<Element>, boolean] {
  const [ref, entry] = useIntersectionObserver(options)
  return [ref, !!entry?.isIntersecting]
}

// Hook for triggering animations when element comes into view
export function useScrollAnimation(
  options: UseIntersectionObserverOptions = {}
): [RefObject<Element>, boolean] {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    freezeOnceVisible: true,
    ...options
  })
  
  return [ref, isInView]
} 