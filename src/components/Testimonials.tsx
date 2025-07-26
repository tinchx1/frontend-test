"use client"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { TESTIMONIALS_DATA, SECTION_TITLES, IMAGE_SIZES } from "@/constants"
import { useCarousel } from "@/hooks"
import "./Testimonials.scss"

export default function Testimonials() {
  const { currentIndex, goToNext, goToPrev, goToIndex } = useCarousel({
    itemsLength: TESTIMONIALS_DATA.length
  })

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">
          Sector de <span className="testimonials__highlight">testimonios</span>
        </h2>
        
        {/* Grid para desktop/tablet */}
        <div className="testimonials__grid testimonials__grid--desktop">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div key={testimonial.id} className="testimonials__card">
              <div className="testimonials__avatar">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={IMAGE_SIZES.avatar.width}
                  height={IMAGE_SIZES.avatar.height}
                />
              </div>
              <h4 className="testimonials__name">{testimonial.name}</h4>
              <p className="testimonials__company">{testimonial.company}</p>
              <p className="testimonials__text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Carousel para mobile */}
        <div className="testimonials__mobile">
          <div className="testimonials__carousel">
            <div 
              className="testimonials__track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS_DATA.map((testimonial) => (
                <div key={testimonial.id} className="testimonials__card testimonials__card--mobile">
                  <div className="testimonials__avatar">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={IMAGE_SIZES.avatar.width}
                      height={IMAGE_SIZES.avatar.height}
                    />
                  </div>
                  <h4 className="testimonials__name">{testimonial.name}</h4>
                  <p className="testimonials__company">{testimonial.company}</p>
                  <p className="testimonials__text">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials__navigation">
            <button className="testimonials__nav testimonials__nav--prev" onClick={goToPrev}>
              <ArrowLeft size={20} />
            </button>
            <div className="testimonials__indicators">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__indicator ${index === currentIndex ? 'testimonials__indicator--active' : ''}`}
                  onClick={() => goToIndex(index)}
                />
              ))}
            </div>
            <button className="testimonials__nav testimonials__nav--next" onClick={goToNext}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
