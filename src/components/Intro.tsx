import { IntroIcon } from "public/icons";
import "./Intro.scss";

export function Intro() {
  return (
    <section className="intro" aria-label="Intro section">
      <div className="intro__content">
        {/* Decorative icon */}

        {/* Single headline broken up with differently styled spans */}
        <h2 className="intro__heading">
          <span className="intro__accent intro__accent--primary">Lorem ipsum dolor sit amet consectetur</span> <span className="intro__accent intro__accent--bold">a</span>liquet
          <br />
          imperdiet <span className="intro__accent intro__accent--bold">penatibus donec velit</span>. A faucibus eget et
          vulputate dapibus congue enim massa. <span className="intro__accent intro__accent--primary">Sem semper odio volutpat</span>
          <span className="intro__accent intro__accent--primary"> risus platea nulla diam id dis..</span>
        </h2>
        <IntroIcon />
      </div>
    </section>
  );
} 