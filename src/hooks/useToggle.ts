import { useState, useCallback } from 'react'

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => setValue(prev => !prev), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue
  }
}

export function useAccordion(initialIndex: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex)

  const toggleItem = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }, [])

  const openItem = useCallback((index: number) => {
    setOpenIndex(index)
  }, [])

  const closeAll = useCallback(() => {
    setOpenIndex(null)
  }, [])

  const isOpen = useCallback((index: number) => openIndex === index, [openIndex])

  return {
    openIndex,
    toggleItem,
    openItem,
    closeAll,
    isOpen
  }
} 