'use client'

import { useState, useEffect } from 'react'

const MOBILE_QUERY = '(max-width: 768px)'

export default function useDevice() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(MOBILE_QUERY)

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    requestAnimationFrame(() => setIsMobile(mediaQuery.matches))

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}
