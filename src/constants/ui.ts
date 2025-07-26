export const ANIMATION_DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
  extra_slow: 500
} as const

export const CAROUSEL_CONFIG = {
  autoPlay: false,
  autoPlayInterval: 3000,
  transitionDuration: 300
} as const

export const MARQUEE_CONFIG = {
  defaultRepeat: 4,
  speed: 50 // px per second
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
} as const

export const Z_INDEX = {
  fixed: 1000,
  modal: 1050,
  tooltip: 1100,
  dropdown: 1200
} as const

export const IMAGE_SIZES = {
  avatar: { width: 80, height: 80 },
  card: { width: 400, height: 400 },
  sponsor: { width: 145, height: 24 }
} as const 