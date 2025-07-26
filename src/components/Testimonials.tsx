"use client"
import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import "./Testimonials.scss"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Daniel",
      company: "Empresa 1",
      text: "Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..",
      image: "/daniel.png",
    },
    {
      id: 2,
      name: "Franco",
      company: "Empresa 2",
      text: "Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.",
      image: "/franco.png",
    },
    {
      id: 3,
      name: "Eugenia",
      company: "Empresa 3",
      text: "Lorem ipsum dolor sit amet consectetur. Mauris mauris ipsum sit egestas in.. Velit vitae eget pharetra adipiscing ut sit egestas condimentum.. Praesent enim ullamcorper utrices est. Duis pellentesque mi ultrices sit vel.. Consequat ut velit id mi in..",
      image: "/eugenia.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">
          Sector de <span className="testimonials__highlight">testimonios</span>
        </h2>
        
        {/* Grid para desktop/tablet */}
        <div className="testimonials__grid testimonials__grid--desktop">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials__card">
              <div className="testimonials__avatar">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
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
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials__card testimonials__card--mobile">
                  <div className="testimonials__avatar">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
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
            <button className="testimonials__nav testimonials__nav--prev" onClick={prevTestimonial}>
              <ArrowLeft size={20} />
            </button>
            <div className="testimonials__indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__indicator ${index === currentIndex ? 'testimonials__indicator--active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="testimonials__nav testimonials__nav--next" onClick={nextTestimonial}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
