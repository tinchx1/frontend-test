import Image from "next/image"
import { SPONSORS_DATA, SECTION_TITLES, IMAGE_SIZES, MARQUEE_CONFIG } from "@/constants"
import "./Sponsors.scss"

interface MarqueeProps {
  children: React.ReactNode;
  repeat?: number;
}

function Marquee({ children, repeat = MARQUEE_CONFIG.defaultRepeat }: MarqueeProps) {
  return (
    <div className="marquee">
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="marquee__content">
            {children}
          </div>
        ))}
    </div>
  );
}

export default function Sponsors() {
  const sponsors = Array(SPONSORS_DATA.count).fill(SPONSORS_DATA.name)

  return (
    <section className="sponsors">
      <div className="sponsors__container">
        <h2 className="sponsors__title">
          <span className="sponsors__highlight">Sponsors</span> del proyecto
        </h2>
        <Marquee>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsors__item">
              <Image 
                src={SPONSORS_DATA.logo} 
                alt={sponsor} 
                width={IMAGE_SIZES.sponsor.width} 
                height={IMAGE_SIZES.sponsor.height} 
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
