import "./FinalCTA.scss"

export function FinalCTA() {
  return (
    <section className="final-cta">
      {/* Background Wave Pattern */}
      <div
        className="final-cta__background"
        style={{
          backgroundImage: "url('/finalCTA.webp')",
        }}
      />

      {/* Content */}
      <div className="final-cta__container">
        <div className="final-cta__content">
          {/* Text Content */}
          <div className="final-cta__text-content">
            <h1 className="final-cta__title">
              Lorem <span className="final-cta__highlight">ipsum dolor sit amet consectetur</span> aliquet imperdiet{" "}
              <span className="final-cta__highlight">penatibus donec velit.</span>
            </h1>
          </div>

          {/* CTA Button */}
          <div className="final-cta__button-container">
            <button className="final-cta__cta-button">Esto es un botón</button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="final-cta__overlay" />
    </section>
  )
}
