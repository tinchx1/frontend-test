import Image from "next/image"
import "./CardsCarousel.scss"

export default function Cards() {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      image: "/card1.webp",
    },
    {
      id: 2,
      title: "Card 2", 
      image: "/card2.webp",
    },
    {
      id: 3,
      title: "Card 3",
      image: "/card3.webp",
    },
  ]

  return (
    <section className="cards">
      <h2 className="cards__section-title">Esto <span className="cards__section-title-accent">titula</span> una sección</h2>
      <div className="cards__container">
        {cards.map((card) => (
          <div key={card.id} className="cards__item">
            <div className="cards__image">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                width={400}
                height={400}
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
