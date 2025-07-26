import Image from "next/image";
import "./Hero.scss";


export function Hero() {
  const heading =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ";
  const accentText = "interdum, ac aliquet odio mattis.";
  return (
    <section className="hero" aria-label="Hero section">
      <Image
        src="/hero.webp"
        alt="Aerial view of a crop harvest"
        fill
        priority
        sizes="100vw"
        className="hero__image"
      />

      <div className="hero__overlay">
        <h1 className="hero__heading">
          {heading}
          <span className="hero__accent">{accentText}</span>
        </h1>
      </div>
    </section>
  );
} 