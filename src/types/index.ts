export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface Testimonial {
  id: number
  name: string
  company: string
  text: string
  image: string
}

export interface Card {
  id: number
  title: string
  image: string
}

export interface SponsorData {
  name: string
  logo: string
  count: number
}

export type SectionTitle = keyof typeof import('@/constants').SECTION_TITLES

export interface CarouselItem {
  id: number | string
  [key: string]: any
}

export interface ImageSize {
  width: number
  height: number
} 