import Image from "next/image"
import "./Sponsors.scss"

interface MarqueeProps {
  children: React.ReactNode;
  repeat?: number;
}

function Marquee({ children, repeat = 4 }: MarqueeProps) {
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
  const sponsors = Array(7).fill("DELSUD")

  return (
    <section className="sponsors">
      <div className="sponsors__container">
        <h2 className="sponsors__title">
          <span className="sponsors__highlight">Sponsors</span> del proyecto
        </h2>
        <Marquee>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsors__item">
              <Image src={`/logo_delsud.webp`} alt={sponsor} width={145} height={24} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
