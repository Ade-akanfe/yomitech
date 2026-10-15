import image1 from "@/assets/29019.jpg";
import Image from "next/image";

const HomePage = () => (
  <section className="hero" id="home" aria-labelledby="hero-heading">
    <div className="hero-image">
      <Image
        src={image1}
        fill
        priority
        sizes="100vw"
        alt="Professional car body repair and refinishing"
      />
    </div>
    <div className="hero-shade" />
    <div className="hero-content">
      <p className="eyebrow eyebrow-light">Automotive bodywork · Birmingham</p>
      <h1 id="hero-heading">
        Car body repairs.
        <br />
        <span>Done properly.</span>
      </h1>
      <p className="hero-description">
        Expert car body repairs, accident restoration and precision spray
        painting, carried out with care and made to fit your budget.
      </p>
      <div className="hero-actions">
        <a className="button" href="#contact">
          Get a repair quote <span aria-hidden="true">→</span>
        </a>
        <a className="hero-phone" href="tel:+447538733798">
          <span>Speak to our team</span>
          +44 7538 733798
        </a>
      </div>
      <p className="hero-location">
        Unit 8, Cobham Business Centre, Birmingham B9 4UP
      </p>
    </div>
  </section>
);

export default HomePage;
