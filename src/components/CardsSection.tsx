import Image from "next/image"
import { CARDS_DATA, SECTION_TITLES, IMAGE_SIZES } from "@/constants"
import "./CardsSection.scss"

export default function CardsSections() {
  return (
    <section className="cards">
      <h2 className="cards__section-title">
        Esto <span className="cards__section-title-accent">titula</span> una sección
      </h2>
      <div className="cards__container">
        {CARDS_DATA.map((card) => (
          <div key={card.id} className="cards__item">
            <div className="cards__image">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                width={IMAGE_SIZES.card.width}
                height={IMAGE_SIZES.card.height}
                className="cards__img"
              />
            </div>
            <div className="cards__content">
              <h3 className="cards__title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
