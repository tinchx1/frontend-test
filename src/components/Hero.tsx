import Image from "next/image";
import { HERO_DATA } from "@/constants";
import "./Hero.scss";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <Image
        src="/hero.webp"
        alt={HERO_DATA.imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero__image"
      />

      <div className="hero__overlay">
        <h1 className="hero__heading">
          {HERO_DATA.heading}
          <span className="hero__accent">{HERO_DATA.accentText}</span>
        </h1>
      </div>
    </section>
  );
} 